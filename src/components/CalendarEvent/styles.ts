import styled from 'styled-components'

export const CalendarEventContainer = styled.div`
  width: 19.75rem;
  padding: 1.5rem;

  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 8px;

  .react-calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    width: 16.75rem;
  }

  .react-calendar__navigation {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }

  .react-calendar__navigation button {
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: capitalize;

    color: ${(props) => props.theme['blue-800']};
    background: none;
    border: 0;
  }

  .react-calendar__navigation button:hover {
    color: ${(props) => props.theme['green-300']};
  }

  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__month-view__weekdays {
    display: flex;
    gap: 0.12rem;

    margin-bottom: 1.25rem;

    background-color: transparent;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-size: 0.81rem;
    font-weight: 500;
    line-height: 1.05rem;
    text-transform: capitalize;

    color: ${(props) => props.theme['gray-500']};
  }

  .react-calendar__month-view__days {
    display: flex;
  }

  .react-calendar__tile,
  .react-calendar__month-view__days__day,
  .react-calendar__month-view__days__day--neighboringMonth {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.85rem;
    height: 2.06rem;

    font-size: 0.81rem;
    font-weight: 500;

    background-color: transparent;
    border: 1px solid transparent;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    color: ${(props) => props.theme['green-300']};
    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 8px;
  }
  .react-calendar__tile--now {
    background: ${(props) => props.theme['green-300']};
    border-radius: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;
    color: ${(props) => props.theme['gray-100']};
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: ${(props) => props.theme['green-100']};
  }

  .react-calendar__year-view {
    display: flex;
    flex: 1;
  }

  .react-calendar__year-view__months__month,
  .react-calendar__decade-view__years__year {
    flex: 1;

    padding: 2rem;
  }
`
