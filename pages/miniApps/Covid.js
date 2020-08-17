import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";

export default function Covid() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [Jan, setJan] = useState([]);
  const [Feb, setFeb] = useState([]);
  const [Mar, setMar] = useState([]);
  const [Apr, setApr] = useState([]);
  const [May, setMay] = useState([]);
  const [Jun, setJun] = useState([]);
  const [Jul, setJul] = useState([]);

  try {
    var dates = [
      "2020-01-31",
      "2020-02-29",
      "2020-03-31",
      "2020-04-30",
      "2020-05-31",
      "2020-06-30",
      "2020-07-31"
    ];
    useEffect(() => {
      const apiUrl =
        "https://api.covid19tracking.narrativa.com/api/" +
        dates[0] +
        "/country/new_zealand";
      console.log(apiUrl);
      fetch(apiUrl)
        .then((res) => res.json())
        .then(
          (result) => {
            setJan(
              result["dates"][dates[0]]["countries"]["New Zealand"][
                "today_confirmed"
              ]
            );
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          },
          [dates],
          fetch(
            "https://api.covid19tracking.narrativa.com/api/" +
              dates[1] +
              "/country/new_zealand"
          )
            .then((res) => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setFeb(
                  result["dates"][dates[1]]["countries"]["New Zealand"][
                    "today_confirmed"
                  ]
                );
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              },
              [dates],
              fetch(
                "https://api.covid19tracking.narrativa.com/api/" +
                  dates[2] +
                  "/country/new_zealand"
              )
                .then((res) => res.json())
                .then(
                  (result) => {
                    setIsLoaded(true);
                    setMar(
                      result["dates"][dates[2]]["countries"]["New Zealand"][
                        "today_confirmed"
                      ]
                    );
                  },
                  (error) => {
                    setIsLoaded(true);
                    setError(error);
                  },
                  [dates],
                  fetch(
                    "https://api.covid19tracking.narrativa.com/api/" +
                      dates[3] +
                      "/country/new_zealand"
                  )
                    .then((res) => res.json())
                    .then(
                      (result) => {
                        setIsLoaded(true);
                        setApr(
                          result["dates"][dates[3]]["countries"]["New Zealand"][
                            "today_confirmed"
                          ]
                        );
                      },
                      (error) => {
                        setIsLoaded(true);
                        setError(error);
                      },
                      [dates],
                      fetch(
                        "https://api.covid19tracking.narrativa.com/api/" +
                          dates[4] +
                          "/country/new_zealand"
                      )
                        .then((res) => res.json())
                        .then(
                          (result) => {
                            setIsLoaded(true);
                            setMay(
                              result["dates"][dates[4]]["countries"][
                                "New Zealand"
                              ]["today_confirmed"]
                            );
                          },
                          (error) => {
                            setIsLoaded(true);
                            setError(error);
                          },
                          [dates],
                          fetch(
                            "https://api.covid19tracking.narrativa.com/api/" +
                              dates[5] +
                              "/country/new_zealand"
                          )
                            .then((res) => res.json())
                            .then(
                              (result) => {
                                setIsLoaded(true);
                                setJun(
                                  result["dates"][dates[5]]["countries"][
                                    "New Zealand"
                                  ]["today_confirmed"]
                                );
                              },
                              (error) => {
                                setIsLoaded(true);
                                setError(error);
                              },
                              [dates],
                              fetch(
                                "https://api.covid19tracking.narrativa.com/api/" +
                                  dates[6] +
                                  "/country/new_zealand"
                              )
                                .then((res) => res.json())
                                .then(
                                  (result) => {
                                    setIsLoaded(true);
                                    setJul(
                                      result["dates"][dates[6]]["countries"][
                                        "New Zealand"
                                      ]["today_confirmed"]
                                    );
                                  },
                                  (error) => {
                                    setIsLoaded(true);
                                    setError(error);
                                  },
                                  [dates]
                                )
                            )
                        )
                    )
                )
            )
        );
    }, [dates]);
  } catch (e) {
    console.log(e);
  }

  console.log(error);

  if (!isLoaded || Feb === undefined) {
    return <div>Loading...</div>;
  } else {
    const state = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Cases",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(0,0,0,1)",
          borderColor: "rgba(1,0,0,1)",
          borderWidth: 2,
          data: [Jan, Feb, Mar, Apr, May, Jun, Jul]
        }
      ]
    };
    return (
      <div className="Graph">
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Total Covid Cases in New Zealand",
              fontSize: 20,
              fontColor: "White"
            },
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontColor: "white"
                  }
                }
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "white"
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
