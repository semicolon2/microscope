const initialState = {
  periods: {
    byId: {
      period1: {
        id: "period1",
        text: "title of period",
        tone: "light",
        events: ["event1", "event2", "event4"]
      },
      period2: {
        id: "period2",
        text: "title of period 2",
        tone: "dark",
        events: ["event3", "event5"]
      },
      period3: {
        id: "period3",
        text: "third period for DnD",
        tone: "light",
        events: []
      }
    },
    allIds: ["period1", "period2", "period3"]
  },
  events: {
    byId: {
      event1: {
        id: "event1",
        periodId: "period1",
        title: "event 1 title but longer still",
        text: "brief but clear description of event",
        tone: "dark"
      },
      event2: {
        id: "event2",
        periodId: "period1",
        title: "event 2 title just a bit more",
        text: "a second event with no scenes",
        tone: "light"
      },
      event3: {
        id: "event3",
        periodId: "period2",
        title: "event 3 title",
        text: "the third event with some scenes",
        tone: "light"
      },
      event4: {
        id: "event4",
        periodId: "period1",
        title: "event 4 title",
        text: "the fourth event for DnD",
        tone: "light"
      },
      event5: {
        id: "event5",
        periodId: "period2",
        title: "event 5",
        text: "another event under p2",
        tone: "light"
      }
    },
    allIds: ["event1", "event2", "event3", "event4", "event5"]
  },
  scenes: {
    byId: [
      {
        id: "scene1",
        eventId: "event3",
        question: "the question/title of the scene",
        text: "the quick description of events",
        answer: "the answer to the question",
        tone: "light"
      },
      {
        id: "scene2",
        eventId: "event3",
        question: "the second scene of this event",
        text: "the quick description of events",
        answer: "the answer to the question",
        tone: "dark"
      },
      {
        id: "scene3",
        eventId: "event1",
        question: "a scene under event1",
        text: "the quick description of events",
        answer: "the answer to the question",
        tone: "dark"
      },
      {
        id: "scene4",
        eventId: "event1",
        question: "a scene under event1",
        text: "the quick description of events",
        answer: "the answer to the question",
        tone: "dark"
      }
    ],
    allIds: ["scene1", "scene2", "scene3", "scene4"]
  }
};

export default initialState;
