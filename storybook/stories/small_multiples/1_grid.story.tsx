/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React, { useState } from 'react';

import {
  ScaleType,
  Position,
  Chart,
  Axis,
  LineSeries,
  GroupBy,
  SmallMultiples,
  Settings,
  BarSeries,
  AreaSeries,
  Fit,
  LineAnnotation,
  BubbleSeries,
  AnnotationDomainType,
  Rotation,
  RectAnnotation,
} from '@elastic/charts';
import { getRandomNumberGenerator, SeededDataGenerator } from '@elastic/charts/src/mocks/utils';

import { useBaseTheme } from '../../use_base_theme';

const getRandomNumber = getRandomNumberGenerator();
const dg = new SeededDataGenerator();

const data1 = dg.generateGroupedSeries(10, 3);
const data2 = dg.generateGroupedSeries(10, 3).map((d) => {
  return getRandomNumber() > 0.95 ? { ...d, y: null } : d;
});
const data3 = dg.generateGroupedSeries(10, 3).map((d) => {
  return getRandomNumber() > 0.95 ? { ...d, y: null } : d;
});

export const Example = () => {
  const splitVertically = boolean('vertical split', true);
  const splitHorizontally = boolean('horizontal split', true);
  const [rotationIndex, setRotationIndex] = useState(0);
  const rot: Rotation = ([0, -90, 90, 0] as Rotation[])[rotationIndex];
  const showLegend = boolean('Show Legend', true);
  return (
    <>
      g
      <button
        type="button"
        onClick={() => {
          setRotationIndex((rotationIndex + 1) % 4);
        }}
      >
        rotate {rot}
      </button>
      <Chart size={[800, 400]}>
        <Settings
          rotation={rot}
          showLegend={showLegend}
          theme={{
            markSizeRatio: 15,
            barSeriesStyle: {
              displayValue: {
                fontSize: {
                  max: 20,
                  min: 10,
                },
                fill: {
                  color: 'black',
                },
              },
            },
            bubbleSeriesStyle: {
              point: {
                opacity: 0.6,
              },
            },
          }}
          baseTheme={useBaseTheme()}
          onBrushEnd={action('brushEvent')}
        />
        <Axis id="time" title="horizontal" position={Position.Bottom} gridLine={{ visible: false }} />
        <Axis
          id="y"
          title="vertical"
          position={Position.Left}
          gridLine={{ visible: false }}
          tickFormat={(d) => d.toFixed(2)}
        />

        <GroupBy
          id="v_split"
          by={({ id }) => {
            return id;
          }}
          sort="alphaAsc"
        />
        <GroupBy
          id="h_split"
          by={(spec, { g }: any) => {
            return g;
          }}
          sort="alphaAsc"
        />
        <SmallMultiples
          splitVertically={splitVertically ? 'v_split' : undefined}
          splitHorizontally={splitHorizontally ? 'h_split' : undefined}
        />

        <RectAnnotation
          dataValues={[
            {
              details: 'ciao',
              coordinates: {
                x0: 1,
                x1: 3,
                y0: 1,
                y1: 3,
              },
            },
          ]}
          id="rect1"
          style={{
            fill: 'violet',
            opacity: 0.5,
          }}
          zIndex={-10}
        />
        <LineAnnotation
          dataValues={[{ dataValue: 4 }]}
          id="test"
          domainType={AnnotationDomainType.XDomain}
          marker={<div style={{ width: 10, height: 10, background: 'red' }} />}
          style={{
            line: {
              stroke: 'red',
              strokeWidth: 2,
              opacity: 0.8,
            },
          }}
          zIndex={-10}
        />

        <LineAnnotation
          dataValues={[{ dataValue: 5 }]}
          id="test2"
          domainType={AnnotationDomainType.YDomain}
          marker={<div style={{ width: 10, height: 10, background: 'blue' }} />}
          style={{
            line: {
              stroke: 'blue',
              strokeWidth: 5,
              opacity: 0.8,
            },
          }}
          zIndex={-10}
        />

        <AreaSeries
          id="area"
          xScaleType={ScaleType.Linear}
          yScaleType={ScaleType.Linear}
          timeZone="local"
          xAccessor="x"
          yAccessors={['y']}
          splitSeriesAccessors={['g']}
          fit={Fit.Linear}
          data={data2}
        />
        <BarSeries
          id="bar"
          xScaleType={ScaleType.Linear}
          yScaleType={ScaleType.Linear}
          timeZone="local"
          xAccessor="x"
          yAccessors={['y']}
          splitSeriesAccessors={['g']}
          stackAccessors={['g']}
          data={data1}
          displayValueSettings={{
            showValueLabel: true,
          }}
        />
        <BubbleSeries
          id="bubble"
          xScaleType={ScaleType.Linear}
          yScaleType={ScaleType.Linear}
          timeZone="local"
          xAccessor="x"
          yAccessors={['y']}
          splitSeriesAccessors={['g']}
          markSizeAccessor="y"
          data={data3}
        />
        <LineSeries
          id="line"
          xScaleType={ScaleType.Linear}
          yScaleType={ScaleType.Linear}
          timeZone="local"
          xAccessor="x"
          yAccessors={['y']}
          splitSeriesAccessors={['g']}
          fit={Fit.Linear}
          data={data3}
        />
      </Chart>
    </>
  );
};
Example.parameters = {
  markdown: `If your data is in UTC timezone, your tooltip and axis labels can be configured
      to visualize the time translated to your local timezone. You should be able to see the
      first value on \`2019-01-01  01:00:00.000 \``,
};
