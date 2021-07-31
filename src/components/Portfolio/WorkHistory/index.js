import * as React from "react";
import {MDBListGroup,MDBRow,MDBIcon,MDBListGroupItem} from "mdb-react-ui-kit";

export const WorkHistory = (props) => {
  const items = (client,time,rolePerformed,discription,numberOfWorkHistory)=>{
    let workHistoryList = [];
      for(let i = 0;i < numberOfWorkHistory;i++){
          workHistoryList.push(
          <MDBListGroupItem>
            <p className="fw-bold">{" "}<MDBIcon fas icon="briefcase" color="primary" />{" "}{client[i]}</p>
            <p className="fw-normal">{time[i]}</p>
            <p className="fst-normal">{rolePerformed[i]}</p>
            <p className="fw-lighter">{discription[i]}</p>
          </MDBListGroupItem>);
        }
      return workHistoryList;
  };

  return (
    <MDBRow className="gy-2">
      <MDBListGroup flush>
      {items(props.client,props.time,props.rolePerformed,props.discription,props.numberOfWorkHistory)}
      </MDBListGroup>  
    </MDBRow>
  );
};
