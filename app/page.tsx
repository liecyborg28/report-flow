/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  Text,
  CardBody,
  Card,
  SimpleGrid,
  Flex,
  HStack,
  Link,
  IconButton,
  Stack,
  Circle,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  HamburgerIcon,
  CloseIcon,
  TimeIcon,
  AtSignIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { useState } from "react";

const MotionText = motion(Text);
const MotionImage = motion(Image);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#flow" },
    { label: "About Us", href: "#about" },
  ];

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex="999"
      bg="rgba(255, 255, 255, 0.2)"
      backdropFilter="blur(20px) saturate(180%)"
      borderBottom="1px solid rgba(255, 255, 255, 0.6)"
      boxShadow="sm">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
        maxW="7xl"
        mx="auto">
        {/* Logo */}
        <Image src="/logo.png" w={10} h={10} alt="navbar logo" />

        {/* Menu desktop */}
        <HStack
          as="nav"
          py={5}
          display={{ base: "none", md: "flex" }}
          fontWeight="medium"
          color="gray.700">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              _hover={{ color: "blue.500" }}
              transition="color 0.3s"
              px={2}>
              {item.label}
            </Link>
          ))}
        </HStack>

        {/* Get Started + Mobile toggle */}
        <HStack>
          <Button
            onClick={() => {
              window.location.href = "https://t.me/ReportFlowBot";
            }}
            display={{ base: "none", md: "inline-flex" }}
            colorPalette="blue"
            px={6}
            borderRadius="full"
            _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
            transition="all 0.2s">
            Get Started
          </Button>

          <IconButton
            aria-label="Toggle Menu"
            display={{ md: "none" }}
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            colorPalette="gray">
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </IconButton>
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box
          pb={4}
          px={4}
          display={{ md: "none" }}
          bg="rgba(255, 255, 255, 0.2)"
          backdropFilter="blur(12px)">
          <Stack as="nav" py={5}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                _hover={{ color: "blue.500" }}
                transition="color 0.2s">
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                window.location.href = "https://t.me/ReportFlowBot";
              }}
              colorPalette="blue"
              w="full"
              mt={2}
              borderRadius="full"
              _hover={{ transform: "translateY(-2px)" }}>
              Get Started
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export function HeroSection() {
  const router = useRouter();

  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      zIndex={2}
      bgGradient="linear(to-br, #e0f2fe, #ede9fe, #fdf4ff)">
      <Box
        position="absolute"
        inset={0}
        bg={`
          radial-gradient(circle at 15% 25%, rgba(147,197,253,0.7) 0%, transparent 70%),
          radial-gradient(circle at 85% 75%, rgba(216,180,254,0.7) 0%, transparent 70%),
          radial-gradient(circle at 50% 90%, rgba(251,207,232,0.6) 0%, transparent 75%)
        `}
        filter="blur(120px) saturate(150%)"
        zIndex={0}
      />

      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-tr, rgba(255,255,255,0.25), rgba(255,255,255,0.1))"
        backdropFilter="blur(50px)"
        zIndex={0}
      />

      <Container maxW="5xl" position="relative" zIndex={1}>
        <VStack textAlign="center">
          <Image src="/logo.png" w={40} h={40} alt="navbar logo" />
          <MotionText
            fontSize="sm"
            color="blue.600"
            fontWeight="semibold"
            letterSpacing="wide"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            POWERED BY AI
          </MotionText>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              color="gray.800"
              lineHeight={{ base: "short", md: "shorter" }}>
              Report Flow: Auto Work Report Sender
            </Heading>
          </motion.div>

          <MotionText
            maxW="2xl"
            color="gray.700"
            fontSize={{ base: "md", md: "lg" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            px={4}
            py={5}>
            Report Flow helps you write, format, and send your reports
            automatically — powered by AI and delivered right on schedule.
          </MotionText>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}>
            <Button
              onClick={() => {
                window.location.href = "https://t.me/ReportFlowBot";
              }}
              colorPalette="blue"
              size="lg"
              px={10}
              boxShadow="lg"
              _hover={{ transform: "translateY(-3px)", boxShadow: "xl" }}
              transition="all 0.2s">
              Get Started
            </Button>
          </motion.div>
        </VStack>
      </Container>

      <style jsx global>{`
        @keyframes float {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-30px);
          }
        }
      `}</style>
    </Box>
  );
}

export function FeaturesSection() {
  const features = [
    {
      title: "Smart Scheduling",
      desc: "Send reports automatically with intelligent reminders that keep you on track.",
      icon: TimeIcon,
    },
    {
      title: "AI Reporting",
      desc: "Describe your report in plain text, and let AI generate a clean, formatted spreadsheet for you.",
      icon: AtSignIcon,
    },
    {
      title: "Auto Delivery",
      desc: "Deliver finished reports directly to recipients’ emails — fast, accurate, and effortless.",
      icon: EmailIcon,
    },
  ];

  return (
    <Box
      bg="white"
      id="features"
      minH="100vh"
      py={{ base: 20, md: 0 }}
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Container maxW="6xl" justifyContent="center" alignItems="center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="semibold"
            textAlign="center"
            my={12}
            color="gray.800">
            Why Choose Report Flow?
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, md: 3 }} py={8}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: true }}>
              <Card.Root
                m={6}
                p={4}
                borderRadius="2xl"
                boxShadow="md"
                bg="white"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "lg",
                }}>
                <CardBody>
                  <VStack align="start" py={4}>
                    <Flex
                      align="center"
                      justify="center"
                      bg="blue.100"
                      color="blue.600"
                      borderRadius="full"
                      boxSize={12}
                      mb={2}>
                      <feature.icon boxSize={6} />
                    </Flex>
                    <Text fontSize="xl" fontWeight="semibold" color="gray.800">
                      {feature.title}
                    </Text>
                    <Text color="gray.600">{feature.desc}</Text>
                  </VStack>
                </CardBody>
              </Card.Root>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export function HowItWorksSection({ steps }) {
  const defaultSteps = [
    {
      title: "Create a report template",
      desc: "Set up a report via our Telegram bot: sender name, activity, reminder , and recipient email.",
    },
    {
      title: "Receive automatic reminders",
      desc: "When the reminder is due, the bot prompts you in Telegram to write your report — no extra apps needed.",
    },
    {
      title: "AI polishes your text",
      desc: "Write the report in plain language and our AI will paraphrase it into a professional, polished report.",
    },
    {
      title: "Email delivered",
      desc: "The AI generates a email from your report and sends the email straight to the recipient's email.",
    },
  ];

  const list = steps && steps.length ? steps : defaultSteps;

  return (
    <Box
      as="section"
      id="flow"
      position="relative"
      overflow="hidden"
      minH="100vh"
      py={{ base: 20, md: 0 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-br, #e0f2fe, #ede9fe, #fdf4ff)">
      {/* Layer efek dreamy */}
      <Box
        position="absolute"
        inset={0}
        bg={`
          radial-gradient(circle at 15% 25%, rgba(147,197,253,0.5) 0%, transparent 70%),
          radial-gradient(circle at 85% 75%, rgba(216,180,254,0.5) 0%, transparent 70%),
          radial-gradient(circle at 50% 90%, rgba(251,207,232,0.4) 0%, transparent 75%)
        `}
        filter="blur(100px) saturate(140%)"
        zIndex={0}
      />

      <Box
        position="relative"
        zIndex={1}
        px={{ base: 6, md: 10 }}
        maxW="6xl"
        mx="auto">
        {/* Title */}
        <VStack p={5} textAlign="center" mb={10}>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="semibold"
            textAlign="center"
            my={12}
            color="gray.800">
            How It Works?
          </Heading>
          <Text fontSize="lg" color="gray.600">
            From Telegram to your inbox — automated reporting made simple.
          </Text>
        </VStack>

        {/* Steps dengan animasi berurutan */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "stretch", md: "flex-start" }}
          gap={{ base: 10, md: 8 }}>
          {list.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }} // 🔥 delay berurutan
              viewport={{ once: true }}
              style={{ flex: 1 }}>
              <VStack align="flex-start" p={4} textAlign="left">
                <Flex align="center" gap={4}>
                  <Circle
                    size={{ base: "45px" }}
                    bg="blue.500"
                    color="white"
                    shadow="md">
                    {i + 1}
                  </Circle>
                  <Heading as="h3" color="black" size="md">
                    {step.title}
                  </Heading>
                </Flex>
                <Text color="gray.600" fontSize={{ base: "sm" }}>
                  {step.desc}
                </Text>
              </VStack>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export function AboutUsSection() {
  return (
    <Box
      bg="white"
      as="section"
      px={{ base: 6, md: 40 }}
      mx="auto"
      minH="100vh"
      py={{ base: 20, md: 0 }}
      id="about"
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 8, md: 12 }}>
        {/* Gambar dengan fade-in + sedikit translateY */}
        <Box flex="1" textAlign="center">
          <MotionImage
            sizes="lg"
            src="/about.jpg"
            alt="About illustration"
            borderRadius="xl"
            shadow="md"
            mx="auto"
            w={80}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </Box>

        {/* Teks / Blockquote */}
        <VStack flex="1" align="flex-start" p={5}>
          <Heading as="h2" size={{ base: "3xl", md: "5xl" }} color="gray.800">
            About Us
          </Heading>

          <Box
            as="blockquote"
            borderLeft="4px solid"
            borderColor="blue.500"
            pl={4}
            fontStyle="italic"
            color="gray.600">
            <Text fontSize={{ base: "md", md: "lg" }}>
              “I came up with this idea because I’ve personally experienced how
              time-consuming it can be to create daily, weekly, or monthly work
              reports manually in Word or Excel. That’s why I wanted to develop
              a more practical solution — one that’s automatically documented
              and easy to summarize.”
            </Text>
          </Box>

          <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
            Hasbi, Founder & CEO Report Flow
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}

export function FooterSection() {
  return (
    <Box
      id="footer"
      py={6}
      textAlign="center"
      borderTop="1px solid"
      borderColor="gray.200">
      <Text fontSize="sm" color="gray.500">
        © {new Date().getFullYear()} Report Flow. All rights reserved.
      </Text>
    </Box>
  );
}

export default function LandingPage() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection steps={undefined} />
      <AboutUsSection />
      <FooterSection />
    </Box>
  );
}
