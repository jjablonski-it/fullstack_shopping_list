import React from "react";
import { ListGroupItem, ListGroup, Button } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles.css";

export const Items = ({ onToggle, onDelete, items }) => {
  const button = id => (
    <Button size="sm" color="success float-right" onClick={() => onToggle(id)}>
      &#10003;
    </Button>
  );

  const buttonsDone = id => (
    <>
      <Button
        size="sm"
        color="danger float-right ml-2"
        onClick={() => onDelete(id)}
      >
        &times;
      </Button>
      <Button
        size="sm"
        color="warning float-right"
        onClick={() => onToggle(id)}
      >
        &#8630;
      </Button>
    </>
  );

  return (
    <ListGroup>
      <TransitionGroup appear={true}>
        {items.map(item => (
          <CSSTransition
            key={item._id}
            in={true}
            classNames="item"
            timeout={300}
            unmountOnExit={true}
          >
            <ListGroupItem color={item.done ? "secondary" : ""}>
              {item.text}
              {item.done ? buttonsDone(item._id) : button(item._id)}
            </ListGroupItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup>
  );
};
