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
                <Card.Title><h3>Jupp Heynckes</h3></Card.Title>
                <Card.Text>
                  Former Manager of Bayern Munich
                </Card.Text>
                <Card.Text>
                  <p className="fw-bold">More than 30 Years Working Experience on being a coach or manager</p>

                  <p className="fw-bold">Josef "Jupp" Heynckes (German: [ˈjʊp ˈhaɪnkəs]; born 9 May 1945) is a German retired professional footballer and manager. As manager, Heynckes won four Bundesliga titles with Bayern Munich and two UEFA Champions Leagues</p>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://pbs.twimg.com/media/DN77TLVWsAAixRY.jpg" />
              <Card.Body>
                <Card.Title> <h3>Sir Alex Ferguson</h3> </Card.Title>
                <Card.Text>
                Former Manager of Bayern Munich
                </Card.Text>
                <Card.Text>
                <p className="fw-bold">More than 30 Years Working Experience on being a coach or manager</p>

                <p className="fw-bold">Sir Alexander Chapman Ferguson CBE (born 31 December 1941) is a Scottish former football manager and player, known for managing Manchester United from 1986 to 2013. He is widely regarded as the greatest football manager of all time, and has won more trophies than any other manager in the history of football.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://editorial.uefa.com/resources/0253-0d7ff863fed8-25e68db7d090-1000/format/wide1/1504452.jpg?imwidth=158%20158w" />
              <Card.Body>
                <Card.Title> <h3>Vincent Del Bosque</h3> </Card.Title>
                <Card.Text>
                Former Coach of Spain National Team
                </Card.Text>
                <Card.Text>
                  <p className="fw-bold">More than 30 Years Working Experience on being a coach or manager</p>

                <p className="fw-bold">Vicente del Bosque González, 1st Marquess of Del Bosque (Spanish born 23 December 1950) is a Spanish retired football manager and former player. He is regarded as one of the greatest managers of all time[1] and is to date the only football manager to have won the World Cup, the Champions League, the European Championship and the Intercontinental Cup.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://www.pixelstalk.net/wp-content/uploads/2015/01/Arsene-Wenger-wallpaper-arsenal-manager.jpg" />
              <Card.Body>
                <Card.Title> <h3>Arsene Wenger</h3> </Card.Title>
                <Card.Text>
                  Arsenal Legendary Former Manager
                </Card.Text>
                <Card.Text>
                  <p className="fw-bold">More than 30 Years Working Experience on being a coach or manager</p>

                <p className="fw-bold">Arsène Charles Ernest Wenger OBE (born 22 October 1949) is a French former football manager and player who is currently serving as FIFA's Chief of Global Football Development. He was the manager of Arsenal from 1996 to 2018, where he was the longest-serving and most successful in the club's history..</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://www.thesun.co.uk/wp-content/uploads/2017/12/nintchdbpict000003942133.jpg" />
              <Card.Body>
                <Card.Title> <h3>Marcello Lippi</h3> </Card.Title>
                <Card.Text>
                  2006 Italy World Cup Winning Manager
                </Card.Text>
                <Card.Text>
                  <p className="fw-bold">More than 30 Years Working Experience on being a coach or manager</p>

                <p className="fw-bold">Marcello Romeo Lippi (born 12 April 1948) is an Italian former professional football player and manager. He served as Italy national football team head coach from 16 July 2004 to 12 July 2006 and led Italy to win the 2006 FIFA World Cup.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://www.acmilaninfo.com/wp-content/uploads/2017/06/eeee-3.jpg" />
              <Card.Body>
                <Card.Title> <h3>Arrigo Sacchi</h3> </Card.Title>
                <Card.Text>
                  Former Manager of Milan and Juventus
                </Card.Text>
                <Card.Text>
                  <p className="fw-bold">More than 30 Years Working Experience on being a coach or manager</p>

                <p className="fw-bold">Arrigo Sacchi (born 1 April 1946) is an Italian former professional football coach. He was twice manager of Milan (1987–1991, 1996–1997), with great success. He won the Serie A title in his 1987–88 debut season.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://media.gettyimages.com/photos/real-madrid-head-coach-fabio-capello-poses-with-the-liga-trophy-at-picture-id75707972?s=612x612" />
              <Card.Body>
                <Card.Title> <h3>Fabio Capello</h3> </Card.Title>
                <Card.Text>
                Former Manager of Real Madrid
                </Card.Text>
                <Card.Text>
                  <p className="fw-bold">More than 30 Years Working Experience on being a coach or manager</p>

                    <p className="fw-bold">Fabio Capello ( born 18 June 1946) is an Italian former professional football manager and player.  He won the Coppa Italia with Roma in 1969, though he was most successful with Juventus, winning three Serie A titles in 1972, 1973 and 1975. With Milan.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img className="about-img" variant="top" src="https://c8.alamy.com/comp/2D5MWFK/manchester-united-manager-louis-van-gaal-lifts-the-emirates-fa-cup-trophy-2D5MWFK.jpg" />
              <Card.Body>
                <Card.Title> <h3>Louis van Gaal</h3> </Card.Title>
                <Card.Text>
                  Former Netherland and Manchester United Manager
                </Card.Text>
                <Card.Text>
                   <p className="fw-bold">More than 30 Years Working Experience on being a coach or manager</p>

                    <p className="fw-bold">Aloysius Paulus Maria "Louis" van Gaal OON (born 8 August 1951) is a Dutch football manager and former player who is the current head coach of the Netherlands national team. At club level, he served as manager of Ajax, Barcelona, AZ Alkmaar, Bayern Munich and Manchester United.</p>
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