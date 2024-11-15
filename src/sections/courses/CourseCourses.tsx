import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// @mui
import {
  Container,
  Divider,
  Grid,
  LinearProgress,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
// hooks
import useResponsive from '@/hooks/useResponsive';
// redux
import { dispatch, useSelector } from '@/redux/store';
// operators
import getListOfCourses from '@/modules/course/redux/operators/getListOfCourses';
// components
import SortSelect from '@/components/select-sort/SelectSort';
import CourseCard from '@/components/course-card';

// ----------------------------------------------------------------------

const SORT_ITEMS = [
  { label: 'پرفروش ترین', value: 'sort=sellCount&dir=desc' },
  { label: 'محبوب ترین', value: 'sort=rating&dir=desc' },

  { label: 'جدید ترین', value: 'sort=created_at&dir=desc' },
  { label: 'قدیمی ترین', value: 'sort=created_at&dir=asc' },

  { label: 'گران ترین', value: 'sort=price&dir=desc' },
  { label: 'ارزان ترین', value: 'sort=price&dir=asc' },
];

// ----------------------------------------------------------------------

export default function CourseCourses() {
  const isMobile = useResponsive('down', 'sm');

  const {
    data,
    meta: { current_page, last_page },
  } = useSelector((s) => s.course.courses);

  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(current_page);

  const [filter, setFilter] = useState<string>('');

  const successCallback = () => {
    setIsLoading(false);
  };

  const failureCallback = (msg: string) => {
    toast.error(msg);
    setIsLoading(false);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(filter);
    searchParams.append('page', page.toString());
    setIsLoading(true);
    dispatch(getListOfCourses(searchParams.toString(), successCallback, failureCallback));
  }, [filter, page]);

  const handleChangePagination = (_: ChangeEvent<unknown>, pageNum: number) => {
    setPage(pageNum);
  };

  return (
    <Stack sx={{ my: 10 }}>
      {/*  */}
      <Stack
        //
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        sx={{ mb: { xs: 5, sm: 0 } }}
      >
        <Typography variant="h6" fontWeight={800}>
          دوره های آموزشی
        </Typography>

        <Divider sx={{ my: { xs: 2, sm: 0 } }} />

        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <SortSelect sortItems={SORT_ITEMS} filter={filter} setFilter={setFilter} />
        </Stack>
      </Stack>

      {!isMobile && <Divider sx={{ my: 4 }} />}

      {/*  */}

      {isLoading && (
        <Container>
          <Stack justifyContent="center" sx={{ height: 300 }}>
            <LinearProgress />
          </Stack>
        </Container>
      )}

      {!isLoading && (
        <>
          <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="flex-start">
            {data.map((p) => (
              <Grid key={p.courseId} item xs={12 / 2} sm={12 / 3} md={12 / 4} lg={12 / 5}>
                <CourseCard {...p} sx={{ width: 'auto', mb: 2 }} />
              </Grid>
            ))}
          </Grid>

          <Stack justifyContent="center" alignItems="center" sx={{ mt: 8 }}>
            <Pagination
              count={Number(last_page)}
              defaultPage={Number(current_page)}
              page={Number(page)}
              dir="rtl"
              onChange={handleChangePagination}
              size={isMobile ? 'small' : 'large'}
              shape="rounded"
              color="darkPrimary"
            />
          </Stack>
        </>
      )}
    </Stack>
  );
}
