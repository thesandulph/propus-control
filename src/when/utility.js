import {run} from '@propus/utility';

export const when = (condition, unless) =>
    Boolean(Boolean(run(condition)) ^ Boolean(run(unless)));
