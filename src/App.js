import React from "react";
import { 
  Box, Button, Flex, Select, SimpleGrid, Text, Divider, Heading, Icon 
} from "@chakra-ui/react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar,
  PieChart, Pie, Cell, ScatterChart, Scatter, Legend
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

const marketValueData = [
  { rating: "AAA", marketValue: 25000, bookValue: 1200, revenue: 800 },
  { rating: "A", marketValue: 20000, bookValue: 1000, revenue: 600 },
  { rating: "AA", marketValue: 15000, bookValue: 400, revenue: 300 },
  { rating: "B", marketValue: 8000, bookValue: 200, revenue: 100 },
  { rating: "BB", marketValue: 6000, bookValue: 150, revenue: 80 },
  { rating: "BBB", marketValue: 4000, bookValue: 100, revenue: 50 },
  { rating: "CCC", marketValue: 2000, bookValue: 50, revenue: 20 }
];

const tableData = [
  { assetClass: 'CMO', issueCountry: 'US', issueDate: '1/1/2001', issuer: 'A ANNUITY LIFE', ratingGrp: 'AAA', updatedIssueDate: '1/1/2010', bookValue: '186432' },
  { assetClass: 'CMO', issueCountry: 'US', issueDate: '1/1/2001', issuer: 'WIEDERKAUFBAU FUER', ratingGrp: 'AAA', updatedIssueDate: '1/1/2010', bookValue: '725591' },
  { assetClass: 'CORPORATES', issueCountry: 'CA', issueDate: '1/1/2001', issuer: 'LLC FUNDING', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '2878202' },
  { assetClass: 'CORPORATES', issueCountry: 'UK', issueDate: '1/1/2001', issuer: 'CORP WHOLESALE', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '2902264' },
  { assetClass: 'CORPORATES', issueCountry: 'UK', issueDate: '1/1/2001', issuer: 'GSCS TRUST', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '2567154' },
  { assetClass: 'CORPORATES', issueCountry: 'KY', issueDate: '1/1/2001', issuer: 'MTG BOND SECS 2005 FARGO', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '865133' },
  { assetClass: 'CMO', issueCountry: 'US', issueDate: '1/1/2001', issuer: 'A ANNUITY LIFE', ratingGrp: 'AAA', updatedIssueDate: '1/1/2010', bookValue: '186432' },
  { assetClass: 'CMO', issueCountry: 'US', issueDate: '1/1/2001', issuer: 'WIEDERKAUFBAU FUER', ratingGrp: 'AAA', updatedIssueDate: '1/1/2010', bookValue: '725591' },
  { assetClass: 'CORPORATES', issueCountry: 'CA', issueDate: '1/1/2001', issuer: 'LLC FUNDING', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '2878202' },
  { assetClass: 'CORPORATES', issueCountry: 'UK', issueDate: '1/1/2001', issuer: 'CORP WHOLESALE', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '2902264' },
  { assetClass: 'CORPORATES', issueCountry: 'UK', issueDate: '1/1/2001', issuer: 'GSCS TRUST', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '2567154' },
  { assetClass: 'CORPORATES', issueCountry: 'KY', issueDate: '1/1/2001', issuer: 'MTG BOND SECS 2005 FARGO', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '865133' },
  { assetClass: 'CMO', issueCountry: 'US', issueDate: '1/1/2001', issuer: 'A ANNUITY LIFE', ratingGrp: 'AAA', updatedIssueDate: '1/1/2010', bookValue: '186432' },
  { assetClass: 'CMO', issueCountry: 'US', issueDate: '1/1/2001', issuer: 'WIEDERKAUFBAU FUER', ratingGrp: 'AAA', updatedIssueDate: '1/1/2010', bookValue: '725591' },
  { assetClass: 'CORPORATES', issueCountry: 'CA', issueDate: '1/1/2001', issuer: 'LLC FUNDING', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '2878202' },
  { assetClass: 'CORPORATES', issueCountry: 'UK', issueDate: '1/1/2001', issuer: 'CORP WHOLESALE', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '2902264' },
  { assetClass: 'CORPORATES', issueCountry: 'UK', issueDate: '1/1/2001', issuer: 'GSCS TRUST', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '2567154' },
  { assetClass: 'CORPORATES', issueCountry: 'KY', issueDate: '1/1/2001', issuer: 'MTG BOND SECS 2005 FARGO', ratingGrp: 'A', updatedIssueDate: '1/1/2010', bookValue: '865133' },
];

const App = () => {
  const [isLineChart, setIsLineChart] = React.useState(true);
  const [isBarChart, setIsBarChart] = React.useState(true);
  const [isAssetBarChart, setIsAssetBarChart] = React.useState(true);

  const assetClassData = React.useMemo(() => {
    const groupedData = tableData.reduce((acc, curr) => {
      const amount = parseFloat(curr.bookValue);
      acc[curr.assetClass] = (acc[curr.assetClass] || 0) + amount;
      return acc;
    }, {});

    return Object.entries(groupedData).map(([assetClass, amount]) => ({
      assetClass,
      amount
    }));
  }, []);

  return (
    <Box p={8} bg="gray.50" minH="100vh">
      {/* Header Section - improved spacing and responsiveness */}
      <Box bg="white" p={8} borderRadius="xl" boxShadow="lg" mb={6}>
        <Flex 
          align="center" 
          justify="space-between" 
          wrap="wrap" 
          gap={6}
        >
          <Heading size="lg" color="gray.800">Investment Portfolio</Heading>

          <Flex gap={4} flex={1} maxW={["100%", "100%", "500px"]}>
            <Select 
              placeholder="Select Country" 
              bg="gray.50" 
              size="md"
              _hover={{ bg: "gray.100" }}
              transition="all 0.2s"
            />
            <Select 
              placeholder="Select Rating" 
              bg="gray.50" 
              size="md"
              _hover={{ bg: "gray.100" }}
              transition="all 0.2s"
            />
            <Select 
              placeholder="Select Type" 
              bg="gray.50" 
              size="md"
              _hover={{ bg: "gray.100" }}
              transition="all 0.2s"
            />
          </Flex>

          <Flex gap={3}>
            <Button 
              colorScheme="blue" 
              size="md"
              px={6}
              _hover={{ transform: "translateY(-1px)" }}
              transition="all 0.2s"
            >
              Apply
            </Button>
            <Button 
              variant="outline" 
              colorScheme="blue" 
              size="md"
              px={6}
              _hover={{ 
                transform: "translateY(-1px)",
                bg: "blue.50"
              }}
              transition="all 0.2s"
            >
              Reset
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* Summary Cards - improved styling */}
      <SimpleGrid 
        columns={[1, 1, 3]} 
        spacing={8} 
        mb={8}
      >
        <Box 
          p={6} 
          bg="white" 
          borderRadius="xl" 
          boxShadow="lg" 
          textAlign="center"
          _hover={{ transform: "translateY(-2px)" }}
          transition="all 0.2s"
        >
          <Text fontSize="lg" color="gray.600" mb={3}>Total Invested Amount</Text>
          <Text fontSize="4xl" fontWeight="bold" color="gray.900">$21,120M</Text>
        </Box>
        {/* Apply same styling to other cards */}
        <Box p={5} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
          <Text fontSize="md" color="gray.600" mb={2}>Number of Investments</Text>
          <Text fontSize="3xl" fontWeight="bold" color="gray.900">380</Text>
        </Box>
        <Box p={5} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
          <Text fontSize="md" color="gray.600" mb={2}>Rate of Return</Text>
          <Text fontSize="3xl" fontWeight="bold" color="red.600">-2.46%</Text>
        </Box>
      </SimpleGrid>

      {/* Charts Grid - improved spacing and responsiveness */}
      <SimpleGrid 
        columns={[1, null, 2]} 
        spacing={8} 
        mb={8}
      >
        {/* Update each chart container with consistent styling */}
        <Box 
          p={8} 
          bg="white" 
          borderRadius="xl" 
          boxShadow="lg"
          _hover={{ transform: "translateY(-2px)" }}
          transition="all 0.2s"
        >
          <Flex justify="space-between" align="center" mb={4}>
            <Text fontSize="md" fontWeight="medium" color="gray.700">Yearly Total Investment</Text>
            <Button 
              size="sm" 
              onClick={() => setIsLineChart(!isLineChart)}
              leftIcon={<Icon as={isLineChart ? FiBarChart2 : FiTrendingUp} />}
              colorScheme="blue"
              variant="ghost"
              fontSize="sm"
            >
              {isLineChart ? 'Bar' : 'Line'}
            </Button>
          </Flex>
          <Divider mb={4} />
          <Box height="calc(100% - 50px)" display="flex" alignItems="center" justifyContent="center">
            {isLineChart ? (
              <LineChart width={550} height={250} data={investmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="year" stroke="#718096" fontSize={12} />
                <YAxis 
                  domain={[0, 8000]}
                  ticks={[0, 2000, 4000, 6000, 8000]}
                  tickFormatter={(value) => `${value}M`}
                  stroke="#718096"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }}
                  formatter={(value) => [`$${value}M`, 'Amount']}
                />
                <Line type="monotone" dataKey="amount" stroke="#3182CE" strokeWidth={2} dot={{ fill: '#3182CE' }} />
              </LineChart>
            ) : (
              <BarChart width={550} height={250} data={investmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="year" stroke="#718096" fontSize={12} />
                <YAxis 
                  domain={[0, 8000]}
                  ticks={[0, 2000, 4000, 6000, 8000]}
                  tickFormatter={(value) => `${value}M`}
                  stroke="#718096"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }}
                  formatter={(value) => [`$${value}M`, 'Amount']}
                />
                <Bar dataKey="amount" fill="#3182CE" barSize={35} radius={[4, 4, 0, 0]} />
              </BarChart>
            )}
          </Box>
        </Box>

        {/* Investment by Rating Group */}
        <Box p={6} bg="white" borderRadius="lg" boxShadow="base" height="100%"
          _hover={{ boxShadow: "md" }}
          transition="box-shadow 0.2s"
        >
          <Flex justify="space-between" align="center" mb={4}>
            <Text fontSize="md" fontWeight="medium" color="gray.700">Total Investment by Rating Group</Text>
            <Button 
              size="sm" 
              onClick={() => setIsBarChart(!isBarChart)}
              leftIcon={<Icon as={isBarChart ? FiPieChart : FiBarChart2} />}
              colorScheme="purple"
              variant="ghost"
              fontSize="sm"
            >
              {isBarChart ? 'Pie' : 'Bar'}
            </Button>
          </Flex>
          <Divider mb={4} />
          <Box height="calc(100% - 50px)" display="flex" alignItems="center" justifyContent="center">
            {isBarChart ? (
              <BarChart width={550} height={250} data={ratingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="rating" stroke="#718096" fontSize={12} />
                <YAxis stroke="#718096" fontSize={12} />
                <Tooltip 
                  contentStyle={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }}
                  formatter={(value) => [`$${value}M`, 'Amount']}
                />
                <Bar dataKey="amount" fill="#805AD5" barSize={35} radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : (
              <PieChart width={550} height={250}>
                <Pie
                  data={ratingData}
                  cx={275}
                  cy={125}
                  outerRadius={100}
                  dataKey="amount"
                  nameKey="rating"
                  label={({rating, percent}) => `${rating} ${(percent * 100).toFixed(0)}%`}
                >
                  {ratingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#805AD5', '#9F7AEA', '#B794F4', '#D6BCFA'][index]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }}
                  formatter={(value) => [`$${value}M`, 'Amount']}
                />
              </PieChart>
            )}
          </Box>
        </Box>
      </SimpleGrid>

      <Box mt={8} bg="white" p={6} borderRadius="lg" boxShadow="md">
        <Flex justify="space-between" align="center" mb={5}>
          <Text fontSize="md" fontWeight="medium" color="gray.700">Investment Details</Text>
          <Text fontSize="sm" color="gray.500">{tableData.length} Records</Text>
        </Flex>
        <Divider mb={4} />
        <Box overflowX="auto" borderRadius="lg" borderWidth="1px" borderColor="gray.200">
          <Box maxH="400px" overflowY="auto">
            <Box as="table" w="100%" fontSize="sm">
              <Box as="thead" bg="gray.50" position="sticky" top={0} zIndex={1} borderBottomWidth="2px" borderColor="gray.200">
                <Box as="tr">
                  <Box as="th" px={6} py={4} textAlign="left" fontWeight="semibold">Asset Class</Box>
                  <Box as="th" px={6} py={4} textAlign="left" fontWeight="semibold">Issue Country</Box>
                  <Box as="th" px={6} py={4} textAlign="left" fontWeight="semibold">Issue Date</Box>
                  <Box as="th" px={6} py={4} textAlign="left" fontWeight="semibold">Issuer</Box>
                  <Box as="th" px={6} py={4} textAlign="left" fontWeight="semibold">Rating Group</Box>
                  <Box as="th" px={6} py={4} textAlign="left" fontWeight="semibold">Updated Issue Date</Box>
                  <Box as="th" px={6} py={4} textAlign="right" fontWeight="semibold">Book Value</Box>
                </Box>
              </Box>
              <Box as="tbody">
                {tableData.map((row, index) => (
                  <Box 
                    as="tr" 
                    key={index} 
                    borderTopWidth="1px" 
                    borderColor="gray.100"
                    _hover={{ bg: "gray.50" }}
                    transition="background 0.2s"
                  >
                    <Box as="td" px={6} py={4}>{row.assetClass}</Box>
                    <Box as="td" px={6} py={4}>{row.issueCountry}</Box>
                    <Box as="td" px={6} py={4}>{row.issueDate}</Box>
                    <Box as="td" px={6} py={4}>{row.issuer}</Box>
                    <Box as="td" px={6} py={4}>{row.ratingGrp}</Box>
                    <Box as="td" px={6} py={4}>{row.updatedIssueDate}</Box>
                    <Box as="td" px={6} py={4} textAlign="right">${row.bookValue}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Additional Charts */}
      <SimpleGrid columns={[1, 2]} spacing={6} mt={8}>
        {/* Total Investment by Assets Class */}
        <Box p={6} bg="white" borderRadius="lg" boxShadow="base" height="100%"
          _hover={{ boxShadow: "md" }}
          transition="box-shadow 0.2s"
        >
          <Flex justify="space-between" align="center" mb={4}>
            <Text fontSize="md" fontWeight="medium" color="gray.700">Total Investment by Assets Class</Text>
            <Button 
              size="sm" 
              onClick={() => setIsAssetBarChart(!isAssetBarChart)}
              leftIcon={<Icon as={isAssetBarChart ? FiPieChart : FiBarChart2} />}
              colorScheme="blue"
              variant="ghost"
              fontSize="sm"
            >
              {isAssetBarChart ? 'Pie' : 'Bar'}
            </Button>
          </Flex>
          <Divider mb={4} />
          <Box height="300px" display="flex" alignItems="center" justifyContent="center">
            {isAssetBarChart ? (
              <BarChart width={550} height={250} data={assetClassData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="assetClass" stroke="#718096" fontSize={12} />
                <YAxis 
                  domain={[0, 'auto']}
                  tickFormatter={(value) => `$${(value/1000000).toFixed(1)}M`}
                  stroke="#718096"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }}
                  formatter={(value) => [`$${(value/1000000).toFixed(1)}M`, 'Amount']}
                />
                <Bar dataKey="amount" fill="#3182CE" barSize={35} radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : (
              <PieChart width={550} height={250}>
                <Pie
                  data={assetClassData}
                  cx={275}
                  cy={125}
                  outerRadius={100}
                  dataKey="amount"
                  nameKey="assetClass"
                  label={({assetClass, percent}) => `${assetClass} ${(percent * 100).toFixed(0)}%`}
                >
                  {assetClassData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#3182CE', '#63B3ED'][index]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }}
                  formatter={(value) => [`$${(value/1000000).toFixed(1)}M`, 'Amount']}
                />
              </PieChart>
            )}
          </Box>
        </Box>
        {/* Market Value/Book Value Chart */}
        <Box p={6} bg="white" borderRadius="lg" boxShadow="base" height="100%"
          _hover={{ boxShadow: "md" }}
          transition="box-shadow 0.2s"
        >
          <Flex justify="space-between" align="center" mb={4}>
            <Text fontSize="md" fontWeight="medium" color="gray.700">Market Value/Book Value by Rating Group</Text>
          </Flex>
          <Divider mb={4} />
          <Box height="300px" display="flex" alignItems="center" justifyContent="center">
              <ScatterChart width={550} height={250} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  type="number"
                  dataKey="marketValue"
                  name="Market Value"
                  unit="M"
                  domain={[0, 30000]}
                  tickFormatter={(value) => `$${value/1000}`}
                />
                <YAxis 
                  type="number"
                  dataKey="bookValue"
                  name="Book Value"
                  unit="M"
                  domain={[0, 1400]}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  formatter={(value, name) => [`$${value}M`, name]}
                  contentStyle={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px' }}
                />
                <Legend />
                {marketValueData.map((entry, index) => (
                  <Scatter
                    key={index}
                    name={entry.rating}
                    data={[entry]}
                    fill={['#805AD5', '#CBD5E0', '#F56565', '#F6AD55', '#68D391', '#4FD1C5', '#90CDF4'][index]}
                    shape="circle"
                    r={Math.sqrt(entry.marketValue) / 4}
                  />
                ))}
              </ScatterChart>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default App;
