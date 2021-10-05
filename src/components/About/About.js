/* import React from 'react';
import'./About.css'

const About = () => {
    return (
        <div className="my-5">
            <h1>General Information: </h1>
            <p>
                
                We are here to make sure your talented kid who consist amazing potential would be something of a big footballer someday. Here we sell the course to make sure your kid gets enough love and care in a proper football academy where we might see someone like messi coming out from there. All those football players came out from academys. It is impossible to be a football player from home or private. So our job is to provide the right info with the right academy.

                </p>  

                <h1>Our History:</h1>
            <p>
                
                We have established this a long time ago and by far we had helped the world to get a lot of gifted player who went to those academy through us. Some of them are <span>Puyol</span> , <span>Xavi</span> , <span>Bale</span> , <span>Iniesta</span> , <span>Sergio Ramos</span>, <span>Carvalho</span>, <span>Benzema</span> and many others. All of these players are now world renowned famous player playing for big clubs like Real Madrid and Barcelona. Here we wish that the next generation will be directed to right path and end up like them.

                </p>  

            <h2>Our Partners: </h2>
            <h4>Barcelona (La Masia)</h4>
            <h4>Ajax Football Academy</h4>
            <h4>Manchester United Academy</h4>
            <h4>Bayern Munich</h4>
            <h4>Sporting Lisbon</h4>
            <h4>Southampton</h4>

            
        </div>
    );
};

export default About; */

import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './About.css';

const AboutUs = () => {
    return (
       
       <div className="about">

            

            <Container>

            <h1 className="mb-3 mt-3">About Us</h1>

            <h2>General Information: </h2>

            <p>We are here to make sure your talented kid who consist amazing potential would be something of a big footballer someday. Here we sell the course to make sure your kid gets enough love and care in a proper football academy where we might see someone like messi coming out from there. All those football players came out from academys. It is impossible to be a football player from home or private. So our job is to provide the right info with the right academy.</p>

            <h2>Our History:</h2>

            <p>We have established this a long time ago and by far we had helped the world to get a lot of gifted player who went to those academy through us. Some of them are <span>Puyol</span> , <span>Xavi</span> , <span>Bale</span> , <span>Iniesta</span> , <span>Sergio Ramos</span>, <span>Carvalho</span>, <span>Benzema</span> and many others. All of these players are now world renowned famous player playing for big clubs like Real Madrid and Barcelona. Here we wish that the next generation will be directed to right path and end up like them.</p>

            <h1 className="my-3">Our Trainers:</h1>

            <Row lg={3} className="g-4">
          <Col className="card">
            <Card >
              <Card.Img className="about-img" variant="top" src="https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2018/11/heynckes.jpg?fit=2702%2C1900&ssl=1" />
              <Card.Body>
                <Card.Title>Jupp Heynckes</Card.Title>
                <Card.Text>
                  Former Manager of Bayern Munich
                </Card.Text>
                <Card.Text>
                  <p className="fw-bold">More than 30 Years Working Experience on Related Field</p>

                  <p className="fw-bold">Josef "Jupp" Heynckes (German: [ˈjʊp ˈhaɪnkəs]; born 9 May 1945) is a German retired professional footballer and manager. As manager, Heynckes won four Bundesliga titles with Bayern Munich and two UEFA Champions Leagues</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://pbs.twimg.com/media/DN77TLVWsAAixRY.jpg" />
              <Card.Body>
                <Card.Title>Sir Alex Ferguson</Card.Title>
                <Card.Text>
                Former Manager of Bayern Munich
                </Card.Text>
                <Card.Text>
                <p className="fw-bold">More than 30 Years Working Experience on Related Field</p>

                <p className="fw-bold">Sir Alexander Chapman Ferguson CBE (born 31 December 1941) is a Scottish former football manager and player, known for managing Manchester United from 1986 to 2013. He is widely regarded as the greatest football manager of all time, and has won more trophies than any other manager in the history of football.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://i1.sndcdn.com/avatars-000213895904-msshn1-t240x240.jpg" />
              <Card.Body>
                <Card.Title>Joyanta Mondal</Card.Title>
                <Card.Text>
                  Music Artist: Sargam
                </Card.Text>
                <Card.Text>
                  7 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://i1.sndcdn.com/artworks-CPGSoridzndZrt4q-7yemUA-t500x500.jpg" />
              <Card.Body>
                <Card.Title>Souvik Sarker</Card.Title>
                <Card.Text>
                  Lead Vocalist: Sargam
                </Card.Text>
                <Card.Text>
                  10 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ijojdpivq3asywkm_1612174816.jpeg" />
              <Card.Body>
                <Card.Title>Shreeya Ghosal</Card.Title>
                <Card.Text>
                  Event Management Head: Sargam
                </Card.Text>
                <Card.Text>
                  6 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://images.news18.com/ibnlive/uploads/2021/03/1615540466_pjimage-10.jpg" />
              <Card.Body>
                <Card.Title>Arijit Singh</Card.Title>
                <Card.Text>
                  Mentor Leader: Sargam
                </Card.Text>
                <Card.Text>
                  6 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://images.news18.com/ibnlive/uploads/2021/03/1615540466_pjimage-10.jpg" />
              <Card.Body>
                <Card.Title>Arijit Singh</Card.Title>
                <Card.Text>
                  Mentor Leader: Sargam
                </Card.Text>
                <Card.Text>
                  6 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://images.news18.com/ibnlive/uploads/2021/03/1615540466_pjimage-10.jpg" />
              <Card.Body>
                <Card.Title>Arijit Singh</Card.Title>
                <Card.Text>
                  Mentor Leader: Sargam
                </Card.Text>
                <Card.Text>
                  6 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://images.news18.com/ibnlive/uploads/2021/03/1615540466_pjimage-10.jpg" />
              <Card.Body>
                <Card.Title>Arijit Singh</Card.Title>
                <Card.Text>
                  Mentor Leader: Sargam
                </Card.Text>
                <Card.Text>
                  6 Years Working Experience on Related Field
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
    
      </Row>
        </Container>
       </div>
    );
};

export default AboutUs;