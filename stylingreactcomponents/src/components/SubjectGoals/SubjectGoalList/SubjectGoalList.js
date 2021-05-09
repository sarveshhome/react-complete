import React from 'react';

import SubjectGoalItem from '../SubjectGoalItem/SubjectGoalItem';
import './SubjectGoalList.css';

const SubjectGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <SubjectGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </SubjectGoalItem>
      ))}
    </ul>
  );
};

export default SubjectGoalList;
