import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Container, Divider, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const founders = [
  {
    name: "Mathias Biilmann",
    role: "CEO & Co-founder",
    bio: "Mathias is a developer and entrepreneur. He co-founded Netlify to make it easier for developers to build, deploy, and scale modern web projects.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXRoaWFzJTIwYmlpbG1hbm4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTIzNTMxMzd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    twitter: "biilmann",
    github: "biilmann",
    linkedin: "mathiasbiilmann",
  },
  {
    name: "Christian Bach",
    role: "President & Co-founder",
    bio: "Christian is a designer and entrepreneur. He co-founded Netlify to enable a better web through modern development and deployment workflows.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBiYWNoJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyMzUzMTM3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    twitter: "chr_bach",
    github: "chr-bach",
    linkedin: "christianbach",
  },
];

const Index = () => {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="container.lg" py={20}>
        <VStack spacing={20}>
          <Heading as="h1" size="2xl">
            Meet the Founders of Netlify
          </Heading>
          {founders.map((founder) => (
            <Box key={founder.name} p={8} bg="white" rounded="lg" shadow="md" textAlign="center">
              <Image src={founder.avatar} alt={founder.name} w={40} h={40} mx="auto" rounded="full" objectFit="cover" />
              <Heading as="h2" size="xl" mt={6}>
                {founder.name}
              </Heading>
              <Text fontSize="lg" color="gray.500">
                {founder.role}
              </Text>
              <Divider my={6} />
              <Text>{founder.bio}</Text>
              <HStack justify="center" spacing={4} mt={6}>
                <Link href={`https://github.com/${founder.github}`} isExternal>
                  <Icon as={FaGithub} w={6} h={6} />
                </Link>
                <Link href={`https://twitter.com/${founder.twitter}`} isExternal>
                  <Icon as={FaTwitter} w={6} h={6} />
                </Link>
                <Link href={`https://www.linkedin.com/in/${founder.linkedin}`} isExternal>
                  <Icon as={FaLinkedin} w={6} h={6} />
                </Link>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
