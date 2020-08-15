import React, { Suspense, lazy, useMemo } from 'react';
import { stepMapper } from './steps/stepMapper';

export const StepLoader = ({
  component, step, title, formOptions,
}: any) => {
  const func = stepMapper[component];
  if (!func) {
    // eslint-disable-next-line no-console
    console.warn(`Component ${component} for step ${step} not yet implemented or configured.`);
    return null;
  }

  const FormStep = useMemo(() => lazy(func), [component]);

  return (
    <Suspense fallback={<div>Form Loading...</div>}>
      <FormStep title={title} formOptions={formOptions} />
    </Suspense>
  );
};
