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
  Blockquote,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const MotionText = motion(Text);

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
      zIndex="1"
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
        {/* <Text
          fontWeight="bold"
          fontSize="xl"
          color="black"
          letterSpacing="wide">
          Report Flow
        </Text> */}

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
          bg="rgba(255, 255, 255, 0.8)"
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
      zIndex={10}
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
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

      <Container
        maxW="5xl"
        py={{ base: 20, md: 28 }}
        position="relative"
        zIndex={1}>
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
              colorPalette="blue"
              onClick={() => router.replace("/")}
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
  return (
    <Box bg="white" py={20} id="features" minH="100vh">
      <Container maxW="6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="semibold"
            textAlign="center"
            mb={12}
            color="gray.800">
            Why Choose Report Flow?
          </Heading>
        </motion.div>

        <SimpleGrid columns={{ base: 1, md: 3 }} className="flex gap-8">
          {[
            {
              title: "Smart Scheduling",
              desc: "Send reports automatically — daily, weekly, or yearly — with intelligent reminders that keep you on track.",
            },
            {
              title: "AI Reporting",
              desc: "Describe your report in plain text, and let AI generate a clean, formatted spreadsheet for you.",
            },
            {
              title: "Auto Delivery",
              desc: "Deliver finished reports directly to recipients’ emails — fast, accurate, and effortless.",
            },
          ].map((feature, i) => (
            <Card.Root
              key={i}
              p={6}
              borderRadius="2xl"
              boxShadow="md"
              bg="white"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "lg",
              }}>
              <CardBody>
                <VStack align="start">
                  <Text fontSize="xl" fontWeight="semibold" color="gray.800">
                    {feature.title}
                  </Text>
                  <Text color="gray.600">{feature.desc}</Text>
                </VStack>
              </CardBody>
            </Card.Root>
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
      desc: "Set up a report via our Telegram bot: sender name, activity, reminder (daily/monthly/yearly), and recipient email.",
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
      title: "Google Sheet delivered",
      desc: "The AI generates a spreadsheet from your report and sends the Google Sheets link straight to the recipient's email.",
    },
  ];

  const list = steps && steps.length ? steps : defaultSteps;

  return (
    <Box
      as="section"
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 10 }}
      maxW="6xl"
      mx="auto"
      minH="100vh"
      id="flow">
      {/* Title */}
      <VStack p={5} textAlign="center" mb={10}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="semibold"
          textAlign="center"
          mb={12}
          color="gray.800">
          How It Works?
        </Heading>
        <Text fontSize="lg" color="gray.600">
          From Telegram to your inbox — automated reporting made simple.
        </Text>
      </VStack>

      {/* Steps */}
      <Flex
        direction={{ base: "column", md: "row" }} // responsive stacking
        justify="space-between"
        align={{ base: "stretch", md: "flex-start" }}
        gap={{ base: 10, md: 8 }}>
        {list.map((step: any, i: any) => (
          <VStack key={i} align="flex-start" p={4} flex="1" textAlign="left">
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
        ))}
      </Flex>
    </Box>
  );
}

export function AboutUsSection() {
  return (
    <Box
      bg="white"
      as="section"
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 40 }}
      mx="auto"
      minH="100vh"
      id="about">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 8, md: 12 }}>
        {/* Gambar */}
        <Box flex="1" textAlign="center">
          <Image
            sizes="lg"
            src="/about.jpg"
            alt="About illustration"
            borderRadius="xl"
            shadow="md"
            mx="auto"
            w={80}
          />
        </Box>

        {/* Teks / Blockquote */}
        <VStack flex="1" align="flex-start" p={5}>
          <Heading as="h2" size="3xl" color="gray.800">
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
              “Saya membuat ide ini karena pernah merasakan sendiri bahwa
              membuat laporan kerja harian, mingguan, atau bulanan secara manual
              di Word atau Excel memakan waktu lama, sehingga saya ingin
              menghadirkan solusi yang lebih praktis, otomatis terdokumentasi,
              dan mudah direkap.”
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
