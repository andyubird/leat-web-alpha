// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 100, left: 60 }}
    padding={0.3}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    valueFormat={{ format: "", enabled: false }}
    colors={{ scheme: "nivo" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: "fries"
        },
        id: "dots"
      },
      {
        match: {
          id: "sandwich"
        },
        id: "lines"
      }
    ]}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);

export default function MonthlyBarChart() {
  let chartData = [
    {
      country: "AD",
      "hot dog": 48,
      "hot dogColor": "hsl(340, 70%, 50%)",
      burger: 106,
      burgerColor: "hsl(132, 70%, 50%)",
      sandwich: 148,
      sandwichColor: "hsl(157, 70%, 50%)",
      kebab: 39,
      kebabColor: "hsl(357, 70%, 50%)",
      fries: 53,
      friesColor: "hsl(332, 70%, 50%)",
      donut: 137,
      donutColor: "hsl(334, 70%, 50%)"
    },
    {
      country: "AE",
      "hot dog": 137,
      "hot dogColor": "hsl(117, 70%, 50%)",
      burger: 141,
      burgerColor: "hsl(281, 70%, 50%)",
      sandwich: 105,
      sandwichColor: "hsl(5, 70%, 50%)",
      kebab: 165,
      kebabColor: "hsl(165, 70%, 50%)",
      fries: 200,
      friesColor: "hsl(10, 70%, 50%)",
      donut: 116,
      donutColor: "hsl(311, 70%, 50%)"
    },
    {
      country: "AF",
      "hot dog": 73,
      "hot dogColor": "hsl(103, 70%, 50%)",
      burger: 47,
      burgerColor: "hsl(158, 70%, 50%)",
      sandwich: 184,
      sandwichColor: "hsl(276, 70%, 50%)",
      kebab: 152,
      kebabColor: "hsl(336, 70%, 50%)",
      fries: 5,
      friesColor: "hsl(93, 70%, 50%)",
      donut: 93,
      donutColor: "hsl(22, 70%, 50%)"
    },
    {
      country: "AG",
      "hot dog": 83,
      "hot dogColor": "hsl(146, 70%, 50%)",
      burger: 197,
      burgerColor: "hsl(26, 70%, 50%)",
      sandwich: 108,
      sandwichColor: "hsl(296, 70%, 50%)",
      kebab: 138,
      kebabColor: "hsl(299, 70%, 50%)",
      fries: 167,
      friesColor: "hsl(21, 70%, 50%)",
      donut: 90,
      donutColor: "hsl(29, 70%, 50%)"
    },
    {
      country: "AI",
      "hot dog": 47,
      "hot dogColor": "hsl(195, 70%, 50%)",
      burger: 106,
      burgerColor: "hsl(193, 70%, 50%)",
      sandwich: 80,
      sandwichColor: "hsl(287, 70%, 50%)",
      kebab: 109,
      kebabColor: "hsl(308, 70%, 50%)",
      fries: 181,
      friesColor: "hsl(205, 70%, 50%)",
      donut: 14,
      donutColor: "hsl(238, 70%, 50%)"
    },
    {
      country: "AL",
      "hot dog": 74,
      "hot dogColor": "hsl(166, 70%, 50%)",
      burger: 130,
      burgerColor: "hsl(7, 70%, 50%)",
      sandwich: 11,
      sandwichColor: "hsl(54, 70%, 50%)",
      kebab: 154,
      kebabColor: "hsl(73, 70%, 50%)",
      fries: 190,
      friesColor: "hsl(193, 70%, 50%)",
      donut: 154,
      donutColor: "hsl(22, 70%, 50%)"
    },
    {
      country: "AM",
      "hot dog": 43,
      "hot dogColor": "hsl(8, 70%, 50%)",
      burger: 46,
      burgerColor: "hsl(22, 70%, 50%)",
      sandwich: 58,
      sandwichColor: "hsl(129, 70%, 50%)",
      kebab: 113,
      kebabColor: "hsl(224, 70%, 50%)",
      fries: 32,
      friesColor: "hsl(282, 70%, 50%)",
      donut: 172,
      donutColor: "hsl(173, 70%, 50%)"
    }
  ];

  return <MyResponsiveBar data={chartData} />;
}
