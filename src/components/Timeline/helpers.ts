import dayjs from 'dayjs';

interface TimelineMonth {
  id: string;
  label: string;
}

export const generateTimelineMonths = (): TimelineMonth[] => {
  const formattedMonths: TimelineMonth[] = [];
  let date = dayjs('2020-01-01');
  const today = dayjs();

  do {
    formattedMonths.push({
      id: date.format('MM-YYYY'),
      label: date.format('MMMM YYYY'),
    });
    date = date.add(1, 'month');
  } while (date.isBefore(today));

  return formattedMonths;
};
