import React, { useState } from 'react';

import SubjectGoalList from './components/SubjectGoals/SubjectGoalList/SubjectGoalList';
import SubjectInput from './components/SubjectGoals/SubjectInput/SubjectInput';
import './App.css';

const App = () => {
  const [SubjectGoals, setSubjectGoals] = useState([
    { text: 'Do all exercises in all Subject!', id: 'g1' },
    { text: 'Finish the Subject!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setSubjectGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: 'goal2' });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setSubjectGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (SubjectGoals.length > 0) {
    content = (
      <SubjectGoalList items={SubjectGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <SubjectInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {SubjectGoals.length > 0 && (
          <SubjectGoalList
            items={SubjectGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
