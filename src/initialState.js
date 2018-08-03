const initialState = {
  periods: {
    byId: {
      period1: {
        id: "period1",
        text: "title of period",
        tone: "light",
        dragging: false,
        events: ["event1", "event2", "event4"]
      },
      period2: {
        id: "period2",
        text: "title of period 2",
        tone: "dark",
        dragging: false,
        events: ["event3", "event5"]
      },
      period3: {
        id: "period3",
        text: "third period for DnD",
        tone: "light",
        dragging: false,
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
        title: "event 1 title",
        text: "brief but clear description of event",
        tone: "dark",
        dragging: false,
        scenes: ["scene3", "scene4"]
      },
      event2: {
        id: "event2",
        periodId: "period1",
        title: "event 2 title but longer",
        text: "a second event with no scenes",
        tone: "light",
        dragging: false,
        scenes: []
      },
      event3: {
        id: "event3",
        periodId: "period2",
        title: "event 3 title",
        text: "the third event with some scenes",
        tone: "light",
        dragging: false,
        scenes: ["scene1", "scene2"]
      },
      event4: {
        id: "event4",
        periodId: "period1",
        title: "event 4 title",
        text: "the fourth event for DnD",
        tone: "light",
        dragging: false,
        scenes: []
      },
      event5: {
        id: "event5",
        periodId: "period2",
        title: "event 5",
        text: "another event under p2",
        tone: "light",
        dragging: false,
        scenes: []
      }
    },

    allIds: ["event1", "event2", "event3", "event4", "event5"]
  },
  scenes: {
    byId: {
      scene1: {
        id: "scene1",
        eventId: "event3",
        question: "the question/title of the scene",
        text: "the quick description of events",
        answer: "the answer to the question",
        tone: "light",
        dragging: false
      },
      scene2: {
        id: "scene2",
        eventId: "event3",
        question: "the second scene of this event",
        text: "the quick description of events",
        answer: "the answer to the question",
        tone: "dark",
        dragging: false
      },
      scene3: {
        id: "scene3",
        eventId: "event1",
        question: "a scene under event1",
        text: "the quick description of events",
        answer: "the answer to the question",
        tone: "dark",
        dragging: false
      },
      scene4: {
        id: "scene4",
        eventId: "event1",
        question: "another scene under this event",
        text: "the quick description of events",
        answer: "the answer to the question",
        tone: "light",
        dragging: false
      }
    },
    allIds: ["scene1", "scene2", "scene3", "scene4"]
  }
};

export default initialState;
