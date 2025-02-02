/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { Fit, StackMode, SeriesType } from '../../packages/charts/src';
import { common } from '../page_objects';

describe('Mixed series stories', () => {
  describe('Fitting functions', () => {
    describe('Area charts - no endValue', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-non-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=none&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });

    describe('Area charts - endValue set to 2', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-non-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=2&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });

    describe('Area charts - endValue set to "nearest"', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-non-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=nearest&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });

    describe('Area charts - with curved - endValue set to 2', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-non-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=1&knob-End value=2&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });

    describe('Area charts - Ordinal dataset - no endValue', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-non-stacked-series&knob-seriesType=area&knob-dataset=ordinal&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=none&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });

    describe('Line charts - no endValue', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-non-stacked-series&knob-seriesType=line&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=none&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });

    describe('Line charts - endValue set to 2', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-non-stacked-series&knob-seriesType=line&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=2&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });

    describe('Line charts - with curve - endValue set to 2', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-non-stacked-series&knob-seriesType=line&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=1&knob-End value=2&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });
  });

  describe('Fitting functions - Stacked charts', () => {
    describe('Area charts - no endValue', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=none&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });

    describe('Area charts - endValue set to 2', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=2&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });

    describe('Area charts - endValue set to "nearest"', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=nearest&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });

    describe('Area charts - with curved - endValue set to 2', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=1&knob-End value=2&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });

    describe('Area charts - Ordinal dataset - no endValue', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-stacked-series&knob-seriesType=area&knob-dataset=ordinal&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=none&knob-Explicit value (using Fit.Explicit)=8`,
          );
        });
      });
    });
  });

  describe('Fitting functions - Stacked charts - as percentage', () => {
    describe('Area charts - no endValue', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=none&knob-Explicit value (using Fit.Explicit)=8&knob-stackMode=percentage`,
          );
        });
      });
    });

    describe('Area charts - endValue set to 2', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=2&knob-Explicit value (using Fit.Explicit)=8&knob-stackMode=percentage`,
          );
        });
      });
    });

    describe('Area charts - endValue set to "nearest"', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=nearest&knob-Explicit value (using Fit.Explicit)=8&knob-stackMode=percentage`,
          );
        });
      });
    });

    describe('Area charts - with curved - endValue set to 2', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-stacked-series&knob-seriesType=area&knob-dataset=all&knob-fitting function=${fitType}&knob-Curve=1&knob-End value=2&knob-Explicit value (using Fit.Explicit)=8&knob-stackMode=percentage`,
          );
        });
      });
    });

    describe('Area charts - Ordinal dataset - no endValue', () => {
      Object.values(Fit).forEach((fitType) => {
        it(`should display correct fit for type - ${fitType}`, async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts--fitting-functions-stacked-series&knob-seriesType=area&knob-dataset=ordinal&knob-fitting function=${fitType}&knob-Curve=0&knob-End value=none&knob-Explicit value (using Fit.Explicit)=8&knob-stackMode=percentage`,
          );
        });
      });
    });
  });

  describe.each(Object.values(StackMode))('Stack mode - %s', (mode) => {
    describe.each(['Mixed', 'Positive', 'Negative'])('Polarity - %s', (polarity) => {
      describe.each([SeriesType.Bar, SeriesType.Area])('%s series', (type) => {
        it('should display correct stacking', async () => {
          await common.expectChartAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts---polarized-stacked&globals=theme:light&knob-stacked=true&knob-data polarity=${polarity}&knob-custom domain=false&knob-stackMode=${mode}&knob-SeriesType=${type}`,
          );
        });

        it('should show area chart with toggled series and mouse over', async () => {
          const action = async () => {
            await page.click('.echLegendItem:nth-child(2) .echLegendItem__label');
          };
          await common.expectChartWithMouseAtUrlToMatchScreenshot(
            `http://localhost:9001/?path=/story/mixed-charts---polarized-stacked&globals=theme:light&knob-stacked=true&knob-data polarity=${polarity}&knob-custom domain=false&knob-stackMode=${mode}&knob-SeriesType=${type}`,
            { top: 170, left: 490 },
            { action },
          );
        });
      });
    });
  });
});
