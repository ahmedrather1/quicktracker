import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs, deleteSong } from "../redux/SongsListSlice";
import { ListGroup, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

function SongsList() {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login);
  const songState = useSelector((state) => state.songsList);
  const [mappedSongs, setMappedSongs] = useState([]);

  const [curMedia, setCurMedia] = useState(null);

  useEffect(() => {
    setMappedSongs(songState.list);
  }, [songState.list]);

  let deleteClick = (toDelete) => {
    let input = {
      id: toDelete,
    };
    dispatch(deleteSong(input)).then(() => {
      dispatch(getAllSongs({ email: loginState.login.email }));
    });
  };

  let titleClick = (show) => {
    setCurMedia(show);
  };

  const TitleText = styled.div`
    cursor: pointer;
    color: #8860d0;
  `;

  const RatingText = styled.div`
    color: #5680e9;
  `;

  const listStyle = {
    border: "1px solid #4390bc",
    backgroundColor: "#C1C8E4",
  };

  const HeadingText = styled.div`
    color: #5680e9;
  `;

  const SummaryText = styled.div`
    color: black;
    flex: 1;
    flexwrap: "wrap";
  `;

  return (
    <div>
      <Row>
        <span>&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;</span>
      </Row>
      <h1 className="text-center">Your Songs</h1>
      <Container className=" mt-5">
        <Row>
          <Col sm={6} xs={12} className="mt-5">
            <div>
              <ListGroup as="ol">
                {mappedSongs.map((song) => (
                  <ListGroup.Item
                    as="li"
                    key={song._id}
                    className="d-flex justify-content-between align-items-start mt-2"
                    style={listStyle}
                    action
                  >
                    <RatingText>
                      <TitleText
                        className="fw-bold"
                        onClick={() => titleClick(song)}
                      >
                        Title: {song.title}
                      </TitleText>
                      Rating: {song.rating} / 5
                    </RatingText>

                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteClick(song._id)}
                    >
                      delete
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col sm={6} xs={12} className="mt-5">
            <HeadingText>
              <h3 className="text-center mt-2"> Summary </h3>
            </HeadingText>
            {curMedia && (
              <SummaryText className="text-center mt-2">
                <Row>
                  <Col style={{ textAlign: "right", color: "#8860d0" }}>
                    Title:
                  </Col>
                  <Col style={{ textAlign: "left" }}>{curMedia.title}</Col>
                </Row>
                <Row>
                  <Col style={{ textAlign: "right", color: "#5680e9" }}>
                    Rating:
                  </Col>
                  <Col style={{ textAlign: "left" }}>{curMedia.rating}/5</Col>
                </Row>
                <Row>
                  <Col style={{ textAlign: "right" }}>Summary:</Col>
                  <Col style={{ textAlign: "left", overflow: "Hidden" }}>
                    {curMedia.summary}
                  </Col>
                </Row>
              </SummaryText>
            )}
            {!curMedia && (
              <SummaryText className="text-center mt-2">
                Click on a title to see its summary!
              </SummaryText>
            )}
          </Col>
        </Row>
        <Row>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;</span>
        </Row>
      </Container>
    </div>
  );
}

export default SongsList;
