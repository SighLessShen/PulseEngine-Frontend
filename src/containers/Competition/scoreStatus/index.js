import React from 'react';
import { Spinner, Flex, Text, Grid, Box, Icon } from '@chakra-ui/core';
import './grapefruit.css'

const TeamRow = (props) => {
    const teamName = props.teamName;
    const teamData = props.teamData;
    console.log(teamData);
    return (
        <React.Fragment>

        <Box className={teamName === "Team 1" || teamName === "Team 3" || teamName === "Team 5" ? "bg" : "dam"} w='100%' h='20' borderWidth='1px' borderColor='darkPop'>
            <Flex w='100%' h='100%' justify='center' align='center'>
                <Text mx='1em' color='white'>
                    {teamName}
                </Text>
            </Flex>
        </Box>

        {Object.keys(teamData).sort().map((service) => {
	if(teamName === "Team 1" || teamName === "Team 3" || teamName === "Team 5") {
            if(teamData[service].status){
                return(
                    <Box key={service} w='100%' h='100' borderWidth='1px' borderColor='darkPop'>
                        <Flex w='100%' className="bg" h='100%' justify='center' align='center'>
                            <Icon name='check' size='1.75rem' color='rgb(40,167,69)' />
			    
                        </Flex>
                    </Box>
                );
            }else{
                return(
                    <Box key={service} w='100%' h='20' borderWidth='1px' borderColor='darkPop'>
                        <Flex className="bg container" w='100%' h='100%' justify='center' align='center'>
                            <Icon className="blob red" name='close' size='1.75rem' color='rgb(217,37,28)' />
                        </Flex>
                    </Box>
                );
            }
	} else {
		if(teamData[service].status){
                return(
                    <Box key={service} w='100%' h='100' borderWidth='1px' borderColor='darkPop'>
                        <Flex w='100%' className="dam" h='100%' justify='center' align='center'>
                            <Icon name='check' size='1.75rem' color='rgb(40,167,69)' />

                        </Flex>
                    </Box>
                );
            }else{
                return(
                    <Box key={service} w='100%' h='20' borderWidth='1px' borderColor='darkPop'>
                        <Flex className="dam container" w='100%' h='100%' justify='center' align='center'>
                            <Icon className="blob red" name='close' size='1.75rem' color='rgb(217,37,28)' />
                        </Flex>
                    </Box>
                );
            }
	}
        })}
        </React.Fragment>
    );
}

const ScoreStatus = (props) => {
    const scores = props.scores;

    if(scores === undefined){
        return (
            <Flex w='100%' justify='center'>
                <Spinner size='md' color='darkPop' />
            </Flex>
        );
    }else if(Object.keys(scores).length === 0){
        return (
            <Flex w='100%' justify='center'>
                <Text color='white'>
                    There are currently no scores
                </Text>
            </Flex>
        );
    }else{
        return (
            <Grid templateColumns={'repeat(' + (Object.keys(scores[Object.keys(scores)[0]]).length + 1) + ', 1fr)'}>
                <Box w='100%' h='20' />
                {Object.keys(scores[Object.keys(scores)[0]]).sort().map((service) => {
                    return (<Box key={service} w='100%' h='20' borderWidth='1px' borderColor='darkPop'>
                        <Flex className="bro" w='100%' h='100%' justify='center' align='center'>
                            <Text color='white'>
				{ service.split(/\s*\-\s*/g)[0] } <br /> <i><span className="srow"> { service.split(/\s*\-\s*/g)[1] }</span> </i>
                            </Text>
                        </Flex>
                    </Box>
                    );
                })}
                {Object.keys(scores).sort().map((teamName) => {
                    const teamData = scores[teamName];
                    return(
                        <TeamRow key={teamName} teamName={teamName} teamData={teamData} />
                    );
                })}
            </Grid>
        );
    }
}

export default ScoreStatus
