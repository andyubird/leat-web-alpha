// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveBar = ({ data /* see data tab */, keys }) => (
  <ResponsiveBar
    data={data}
    keys={keys}
    indexBy="sector"
    valueFormat={(value) =>
      `${Number(value).toLocaleString("en-US", {
        minimumFractionDigits: 2
      })}`
    }
    margin={{ top: 50, right: 70, bottom: 50, left: 60 }}
    padding={0.3}
    groupMode="grouped"
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "nivo" }}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "部門",
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
    labelSkipWidth={50}
    labelSkipHeight={0}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: true,
        translateX: 70,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 50,
        itemHeight: 29,
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

export default function SectorBarChart(props) {
  return <MyResponsiveBar data={props.data} keys={props.keys} />;
}
