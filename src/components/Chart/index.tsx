import React, { FC, useState } from "react";
import initialData from "mockData/chart.json";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

import S from "./styled";
import Button from "components/common/Button";
import { dateParser } from "helpers/dateParser";
import { getYTicks } from "helpers/getYTicks";

const initialState = {
  data: initialData,
  left: "dataMin",
  right: "dataMax",
  refAreaLeft: "",
  refAreaRight: "",
  top: Math.ceil(Math.max(...initialData.map((i) => i.value)) / 100) * 100,
  bottom: 0,
};

const Chart: FC = () => {
  const [state, setState] = useState(initialState);

  const zoom = () => {
    const { data } = state;

    if (state.refAreaLeft === state.refAreaRight || !state.refAreaRight) {
      setState({
        ...state,
        refAreaLeft: "",
        refAreaRight: "",
      });
      return;
    }

    if (state.refAreaLeft > state.refAreaRight)
      [state.refAreaLeft, state.refAreaRight] = [
        state.refAreaRight,
        state.refAreaLeft,
      ];

    setState({
      ...state,
      refAreaLeft: "",
      refAreaRight: "",
      data: data.filter(
        (item) =>
          dateParser(item.date) >= dateParser(state.refAreaLeft) &&
          dateParser(item.date) <= dateParser(state.refAreaRight)
      ),
      left: state.refAreaLeft,
      right: state.refAreaRight,
      bottom: state.bottom,
      top: state.top,
    });
  };

  const zoomOut = () => {
    setState(initialState);
  };

  return (
    <S.Wrapper>
      <S.Title>Patients 2022</S.Title>
      <Button
        type="button"
        onClick={zoomOut}
        styles={{ padding: ".5rem 1rem" }}
      >
        Zoom Out
      </Button>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={800}
          height={400}
          data={state.data}
          onMouseDown={(e) =>
            setState({ ...state, refAreaLeft: e.activeLabel! })
          }
          onMouseMove={(e) =>
            state.refAreaLeft &&
            setState({ ...state, refAreaRight: e.activeLabel! })
          }
          onMouseLeave={() =>
            setState({ ...state, refAreaLeft: "", refAreaRight: "" })
          }
          onMouseUp={zoom}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            allowDataOverflow
            dataKey="date"
            type="category"
            interval={0}
            angle={-90}
            dy={40}
            dx={-5}
            height={100}
            fontSize={"12px"}
          />
          <YAxis
            allowDataOverflow
            domain={[state.bottom, state.top]}
            type="number"
            ticks={getYTicks(state.top, 50)}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Line
            type="monotype"
            dataKey="value"
            stroke="#8884d8"
            animationDuration={300}
            strokeWidth={3}
            dot={false}
          />
          {state.refAreaLeft && state.refAreaRight ? (
            <ReferenceArea
              x1={state.refAreaLeft}
              x2={state.refAreaRight}
              strokeOpacity={0.3}
            />
          ) : null}
        </LineChart>
      </ResponsiveContainer>
    </S.Wrapper>
  );
};

export default Chart;
