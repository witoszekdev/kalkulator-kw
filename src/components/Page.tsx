import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  ScaleFade,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { useState } from "react";
import { letterValues } from "../consts";
import { CitySelect } from "./CitySelect";
import FormInput from "./FormInput";

function Page() {
  const [city, setCity] = useState<string>();
  const [kwNumber, setKwNumber] = useState<string>();
  const [result, setResult] = useState<string>();

  return (
    <Container>
      <Box mt={4}>
        <Flex alignItems="center" direction="column">
          <Heading as="h1" size="lg">
            Kalkulator Księgi Wieczystej
          </Heading>
          <p>Oblicz sumę kontrolną księgi wieczystej</p>
        </Flex>
        <Flex
          direction="column"
          gap={4}
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            if (!city || !kwNumber) {
              return console.error("wrong data");
            }
            setResult(calculateControlSum(city, kwNumber).toString());
          }}
        >
          <FormInput label="Sąd">
            <CitySelect
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </FormInput>

          <FormInput label="Numer księgi">
            <Input
              type="text"
              inputMode="numeric"
              maxLength={8}
              minLength={8}
              required
              onChange={(e) => setKwNumber(e.target.value)}
              value={kwNumber ?? ""}
            />
          </FormInput>

          <Flex alignSelf="center">
            <Button type="submit">
              Oblicz
              <ArrowForwardIcon ml={2} />
            </Button>
          </Flex>
        </Flex>

        <ScaleFade in={!!result} unmountOnExit>
          <Box mt={10}>
            <Stat>
              <StatLabel>Wynik</StatLabel>
              <StatNumber>
                {city}/{kwNumber}/{result}
              </StatNumber>
            </Stat>
          </Box>
        </ScaleFade>
      </Box>
    </Container>
  );
}

function calculateControlSum(city: string, number: string) {
  const combined = `${city}${number}`;
  const total = [...combined]
    .map((char) => getLetterValue(char))
    .reduce((sum, value) => sum + value, 0);
  return total % 10;
}

function getLetterValue(letter: string) {
  const upperCase = letter.toUpperCase();
  return letterValues.findIndex((value) => value === upperCase);
}

export default Page;
