import CartWidget from './CartWidget';
import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react'
const NavBar = () => {
    
return (<>
<Container maxW="md" bg="blue.200" color="white">
    <Flex alignContent={"center"} gap= "2">
        <Box p="2" color= "white">
            <Heading size="md">TuTienda</Heading>
        </Box>
        <Spacer/>
        <Box p="2" color= "white">
            <CartWidget/>
        </Box>
    </Flex>
    </Container>
</>
);
}

export default NavBar;