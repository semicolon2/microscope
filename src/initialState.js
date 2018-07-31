const initialState = {
  periods: [
    {
      id: 'period-1',
      text: 'title of period',
      tone: 'light',
      events: [
        {
          id: 'event-1',
          title: 'event 1 title but longer still',
          text: 'brief but clear description of event',
          tone: 'dark',
          scenes: [
            {
              id: 'scene-1',
              question: 'the question/title of the scene',
              text: 'the quick description of events',
              answer: 'the answer to the question',
              tone: 'dark'
            }
          ]
        },
        {
          id: 'event-2',
          title: 'event 2 title',
          text: 'a second event with no scenes',
          tone: 'light',
          scenes: []
        }
      ]
    },
    {
      id: 'period-2',
      text: 'title of period 2',
      tone: 'dark',
      events: [
        {
          id: 'event-1',
          title: 'event 1 title',
          text: 'brief but clear description of event, this is in period 2',
          tone: 'dark',
          scenes: [
            {
              id: 'scene-1',
              question: 'the question/title of the scene',
              text: 'the quick description of events',
              answer: 'the answer to the question',
              tone: 'light'
            },
            {
              id: 'scene-2',
              question: 'the second scene of this event',
              text: 'the quick description of events',
              answer: 'the answer to the question',
              tone: 'dark'
            }
          ]
        }
      ]
    },
    {
      id: 'period-3',
      text: 'third period for DnD',
      tone: 'light',
      events: []
    }
  ]
};

export default initialState;