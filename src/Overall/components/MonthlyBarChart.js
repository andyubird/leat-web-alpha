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
    keys={[
      "住宅部門售電量(度)",
      "服務業部門(含包燈)(度)",
      "農林漁牧售電量(度)",
      "工業部門售電量(度)"
    ]}
    indexBy="月"
    margin={{ top: 50, right: 130, bottom: 100, left: 60 }}
    padding={0.3}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    valueFormat={{ format: ".2", enabled: true }}
    colors={{ scheme: "nivo" }}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "月份",
      legendPosition: "middle",
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "售電量(億度)",
      legendPosition: "middle",
      legendOffset: -40
    }}
    enableLabel={false}
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

export default function MonthlyBarChart(props) {
  return <MyResponsiveBar data={props.data} />;
}
