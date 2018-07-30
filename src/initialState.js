const initialState = {
  periods: [
    {
      key: 'period-1',
      text: 'title of period',
      tone: 'light',
      events: [
        {
          key: 'event-1',
          title: 'event 1 title',
          text: 'brief but clear description of event',
          tone: 'dark',
          scenes: [
            {
              question: 'the question/title of the scene',
              text: 'the quick description of events',
              answer: 'the answer to the question',
              tone: 'dark'
            }
          ]
        },
        {
          key: 'event-2',
          title: 'event 2 title',
          text: 'a second event with no scenes',
          tone: 'light',
          scenes: []
        }
      ]
    },
    {
      key: 'period-2',
      text: 'title of period 2',
      tone: 'dark',
      events: [
        {
          key: 'event-1',
          title: 'event 1 title',
          text: 'brief but clear description of event, this is in period 2',
          tone: 'dark',
          scenes: [
            {
              question: 'the question/title of the scene',
              text: 'the quick description of events',
              answer: 'the answer to the question',
              tone: 'light'
            },
            {
              question: 'the second scene of this event',
              text: 'the quick description of events',
              answer: 'the answer to the question',
              tone: 'dark'
            }
          ]
        }
      ]
    }
  ]
};

export default initialState;