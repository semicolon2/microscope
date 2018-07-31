const initialState = {
  periods: [
    {
      id: "period-1",
      text: "title of period",
      tone: "light"
    },
    {
      id: "period-2",
      text: "title of period 2",
      tone: "dark"
    },
    {
      id: "period-3",
      text: "third period for DnD",
      tone: "light"
    }
  ],
  events: [
    {
      id: "event-1",
      periodId: "period-1",
      title: "event 1 title but longer still",
      text: "brief but clear description of event",
      tone: "dark"
    },
    {
      id: "event-2",
      periodId: "period-1",
      title: "event 2 title just a bit more",
      text: "a second event with no scenes",
      tone: "light"
    },
    {
      id: "event-3",
      periodId: "period-2",
      title: "event 3 title",
      text: "the third event with some scenes",
      tone: "light"
    },
    {
      id: "event-4",
      periodId: "period-1",
      title: "event 4 title",
      text: "the fourth event for DnD",
      tone: "light"
    }
  ],
  scenes: [
    {
      id: "scene-1",
      eventId: "event-3",
      question: "the question/title of the scene",
      text: "the quick description of events",
      answer: "the answer to the question",
      tone: "light"
    },
    {
      id: "scene-2",
      eventId: "event-3",
      question: "the second scene of this event",
      text: "the quick description of events",
      answer: "the answer to the question",
      tone: "dark"
    },
    {
      id: "scene-3",
      eventId: "event-1",
      question: "a scene under event-1",
      text: "the quick description of events",
      answer: "the answer to the question",
      tone: "dark"
    }
  ]
};

export default initialState;
