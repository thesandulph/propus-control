import {run} from '@reatc/utility';

export const when = (condition, unless) =>
    Boolean(Boolean(run(condition)) ^ Boolean(run(unless)));
