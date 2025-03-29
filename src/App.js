import React from "react";
import { 
  Box, Button, Flex, Select, SimpleGrid, Text, VStack, Divider, Heading, Icon 
} from "@chakra-ui/react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar,
  PieChart, Pie, Cell
} from "recharts";
import { FiBarChart2, FiPieChart } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";

// Investment Data
const investmentData = [
  { year: "2010", amount: 0 },
  { year: "2011", amount: 1000 },
  { year: "2012", amount: 3000 },
  { year: "2013", amount: 5000 },
  { year: "2014", amount: 6000 },
  { year: "2015", amount: 5500 },
];

// Rating Group Data
const ratingData = [
  { rating: "AAA", amount: 12000 },
  { rating: "AA", amount: 6000 },
  { rating: "A", amount: 2000 },
  { rating: "BBB", amount: 1000 },
];

const App = () => {
  const [isLineChart, setIsLineChart] = React.useState(true);
  const [isBarChart, setIsBarChart] = React.useState(true);

  return (
    <Box p={6} bg="gray.50" minH="100vh">
      
      {/* Header Section */}
      <Box bg="white" p={4} borderRadius="lg" boxShadow="md">
        <Flex align="center" justify="space-between" wrap="wrap" gap={4}>
          <Heading size="md" color="gray.800">Investment Portfolio</Heading>

          <Flex gap={3} flex="1" maxW="600px">
            <Select placeholder="Select Country" bg="gray.100" />
            <Select placeholder="Select Rating Group" bg="gray.100" />
            <Select placeholder="Select Type" bg="gray.100" />
          </Flex>

          <Flex gap={2}>
            <Button colorScheme="blue">Apply</Button>
            <Button variant="outline" colorScheme="blue">Reset</Button>
          </Flex>
        </Flex>
      </Box>

      {/* Summary Cards */}
      <SimpleGrid columns={[1, 3]} spacing={6} mt={6}>
        <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
          <Text fontSize="sm" color="gray.600">Total Invested Amount</Text>
          <Text fontSize="2xl" fontWeight="bold" color="gray.900">$21,120M</Text>
        </Box>
        <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
          <Text fontSize="sm" color="gray.600">Number of Investments</Text>
          <Text fontSize="2xl" fontWeight="bold" color="gray.900">380</Text>
        </Box>
        <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
          <Text fontSize="sm" color="gray.600">Rate of Return</Text>
          <Text fontSize="2xl" fontWeight="bold" color="red.600">-2.46%</Text>
        </Box>
      </SimpleGrid>

      {/* Charts */}
      <SimpleGrid columns={[1, 2]} spacing={6} mt={8} height="calc(100vh - 380px)">
        
        {/* Yearly Investment Chart */}
        <Box p={5} bg="white" borderRadius="lg" boxShadow="md" height="100%">
          <Flex justify="space-between" align="center" mb={4}>
            <Text fontSize="sm" fontWeight="bold" color="gray.700">Yearly Total Investment</Text>
            <Button 
              size="sm" 
              onClick={() => setIsLineChart(!isLineChart)}
              leftIcon={<Icon as={isLineChart ? FiBarChart2 : FiTrendingUp} />}
              colorScheme="blue"
              variant="ghost"
            >
              {isLineChart ? 'Bar' : 'Line'}
            </Button>
          </Flex>
          <Divider mb={3} />
          {isLineChart ? (
            <LineChart width={600} height={300} data={investmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis 
                domain={[0, 8000]}
                ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]}
                tickFormatter={(value) => `${value}M`}
              />
              <Tooltip 
                formatter={(value) => [`Total Invested Amount in the Year is $${value}M`]}
                labelStyle={{ color: 'gray.600' }}
              />
              <Line type="monotone" dataKey="amount" stroke="#3182CE" strokeWidth={3} />
            </LineChart>
          ) : (
            <BarChart width={600} height={300} data={investmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis 
                domain={[0, 8000]}
                ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]}
                tickFormatter={(value) => `${value}M`}
              />
              <Tooltip 
                formatter={(value) => [`Total Invested Amount in the Year is $${value}M`]}
                labelStyle={{ color: 'gray.600' }}
              />
              <Bar dataKey="amount" fill="#3182CE" barSize={40} radius={[5, 5, 0, 0]} />
            </BarChart>
          )}
        </Box>

        {/* Investment by Rating Group */}
        <Box p={5} bg="white" borderRadius="lg" boxShadow="md" height="100%">
          <Flex justify="space-between" align="center" mb={4}>
            <Text fontSize="sm" fontWeight="bold" color="gray.700">Total Investment by Rating Group</Text>
            <Button 
              size="sm" 
              onClick={() => setIsBarChart(!isBarChart)}
              leftIcon={<Icon as={isBarChart ? FiPieChart : FiBarChart2} />}
              colorScheme="purple"
              variant="ghost"
            >
              {isBarChart? 'Pie' : 'Bar'}
            </Button>
          </Flex>
          <Divider mb={3} />
          {isBarChart ? (
            <BarChart width={600} height={300} data={ratingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="rating" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`Total Invested Amount in the Year is $${value}M`]}
                labelStyle={{ color: 'gray.600' }}
              />
              <Bar dataKey="amount" fill="#805AD5" barSize={40} radius={[5, 5, 0, 0]} />
            </BarChart>
          ) : (
            <PieChart width={600} height={300}>
              <Pie
                data={ratingData}
                cx={300}
                cy={250}
                outerRadius={180}
                dataKey="amount"
                nameKey="rating"
                label={({rating, percent}) => `${rating} ${(percent * 100).toFixed(0)}%`}
              >
                {ratingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#805AD5', '#9F7AEA', '#B794F4', '#D6BCFA'][index]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`$${value}M`]}
              />
            </PieChart>
          )}
        </Box>
      </SimpleGrid>

    </Box>
  );
};

export default App;
