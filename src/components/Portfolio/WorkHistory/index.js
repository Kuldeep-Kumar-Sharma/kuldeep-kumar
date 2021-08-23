import * as React from 'react';
import { MDBListGroup, MDBRow, MDBIcon, MDBListGroupItem } from 'mdbreact';

export const WorkHistory = (props) => {
  const items = (
    client,
    time,
    rolePerformed,
    discription,
    numberOfWorkHistory
  ) => {
    let workHistoryList = [];
    for (let i = 0; i < numberOfWorkHistory; i++) {
      workHistoryList.push(
        <MDBListGroupItem key={i}>
          <p className="fw-bold">
            {' '}
            <MDBIcon fas icon="briefcase" color="primary" /> {client[i]}
          </p>
          <p className="fw-normal">{time[i]}</p>
          <p className="fst-normal">{rolePerformed[i]}</p>
          <p className="fw-lighter">{discription[i]}</p>
        </MDBListGroupItem>
      );
    }
    return workHistoryList;
  };

  return (
    <MDBRow className="mt-2 ml-2">
      {items(
        props.client,
        props.time,
        props.rolePerformed,
        props.discription,
        props.numberOfWorkHistory
      )}
    </MDBRow>
  );
};
