/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import moment from "moment";

export default function Gov() {
  const [proposals, setProposals] = useState();
  const [totalProposals, setTotalProposals] = useState(0);
  const now = moment();
  const baseUrl = "https://snapshot.org/#/dragonrace.eth/proposal/";

  function ProposalsLink(url) {
    window.open(url, "_blank").focus();
  }
  useEffect(() => {
    axios({
      method: "post",
      url: "https://hub.snapshot.org/graphql",
      data: {
        query: `
                query Proposals {
                    proposals(
                      first: 20,
                      skip: 0,
                      where: {
                        space_in: ["dragonrace.eth"],
                       
                      },
                      orderBy: "created",
                      orderDirection: desc
                    ) {
                      id
                      title
                      body
                      choices
                      start
                      end
                      snapshot
                      state
                      author
                      space {
                        id
                        name
                      }
                    }
                  }`,
      },
    }).then(
      res => {
        console.log(res.data.data.proposals);
        setProposals(res.data.data.proposals);

        setTotalProposals(res.data.data.proposals.length);
      },
      error => {},
    );
  }, []);

  return (
    <React.Fragment>
      <div className='pt-5'></div>
      <div className='container-fluid gov mt-0 section-padding'>
        <div className='container mt-0 pt-0'>
          <div className='row'>
            <div className='col-xs-12 pl-2 mt-0'>
              <div className='col-xs-6 d-flex justify-content-between heading'>
                <h1 className=' font-weight mt-4  font-weight-bold'>
                  Governance
                </h1>
                <div>
                  <a className='btn  mt-4 gov-btn'>Create a new proposal</a>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-4'>
              <div className='tile m-2'>
                <h3 className='font-weight-bold'>{totalProposals}</h3>
                <h4> Total Proposals</h4>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='tile m-2'>
                <h3 className='font-weight-bold'>0</h3>
                <h4> Voting Delegated</h4>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='tile m-2'>
                <h3 className='font-weight-bold'>0</h3>
                <h4> Voting Addresses</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container proposals mb-5 pb-5 mt-5' lang=''>
        <div className='card '>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item1 font-weight-bolder fs-24 p-3 pl-4'>
              Recent Dragon Race Proposals
            </li>
            {proposals ? (
              <React.Fragment>
                {proposals.map((key, index) => {
                  return (
                    <React.Fragment>
                      {/* {console.log(key.title)} */}
                      <li
                        className='list-group-item p-3 pb-4 pl-5 proposalsLink'
                        key={index}>
                        <span
                          className='font-weight-bold fs-20 link'
                          onClick={() => {
                            ProposalsLink(baseUrl + key.id);
                          }}>
                          {key.title}
                        </span>
                        <span className='d-block mt-1'>
                          <span
                            className={`badge ${
                              now.diff(moment.unix(key.end), "hours") > 0
                                ? "badge-success"
                                : "badge-warning"
                            }`}>
                            {now.diff(moment.unix(key.end), "hours") > 0
                              ? "Closed"
                              : "In Progress"}
                          </span>
                          &nbsp;{" "}
                          <span className=' times'>
                            #{totalProposals - index}{" "}
                            <i className='fa fa-circle'></i> &nbsp;
                            {moment.unix(key.start).format("MMMM Do, YYYY")}
                            &nbsp; - &nbsp;
                            {moment.unix(key.end).format("MMMM Do, YYYY")}
                          </span>
                        </span>
                      </li>
                    </React.Fragment>
                  );
                })}
                {Object.keys(proposals).length === 0 && (
                  <React.Fragment>
                    <div className='p-5 m-auto text-center'>
                      <h5>Oops, we can't find any proposal.</h5>
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            ) : (
              <>
                <div className='text-center mt-4 mb-4'>
                  <div className='spinner-border' role='status'>
                    <span className='sr-only'></span>
                  </div>
                  <br />
                  Please wait, <br /> only for you.
                </div>
                {/* <div class="lds-ring mt-5 mb-5"><div></div><div></div><div></div><div></div></div> */}
              </>
            )}
            {/* {
                            proposals ?
                            
                                <React.Fragment>
                                
                                    {Object.keys(proposals).length === 0 &&
                                        <React.Fragment>
                                            <div className="p-5 m-auto text-center">
                                                <h5>Oops, we can't find any proposal.</h5>
                                            </div>
                                        </React.Fragment>
                                    }
                                </React.Fragment>
                                :
                                <p className="text-center mt-4 mb-4">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only"></span>
                                    </div><br />
                                    Please wait  , <br /> only for you .
                                </p>
                            // <div class="lds-ring mt-5 mb-5"><div></div><div></div><div></div><div></div></div>
                        } */}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
