import { PropsWithChildren } from "react";
type RoundStrategy = "floor" | "round";
export type TimeAgoProps = {
    date: Date | string;
    /** the language to use */
    locale?: string;
    /** options for {@link Intl.RelativeTimeFormat} */
    formatOptions?: Intl.RelativeTimeFormatOptions;
    /**
     * If `true` values in the future will also be
     * displayed - e.g. "in 3 days"
     */
    allowFuture?: boolean;
    /**
     * If `true`, values smaller than 1 minute will shown as
     * "1 minute" instead of frequently updating seconds.
     */
    hideSeconds?: boolean;
    /**
     * If hideSeconds is `true`, values smaller than 1 minute
     * will display this custom string, instead of "1 minute"
     *
     * @example ['just now', 'right now']
     */
    hideSecondsText?: [string, string];
    /**
     * By default, values are `floor`ed (e.g. 23.9 months
     * becomes "1 year"). Is this is not desired, the rounding
     * strategy can be changed to `round` or even `ceil`.
     */
    roundStrategy?: RoundStrategy;
    /**
     * by default, the result is wrapped in an
     * {@link HTMLTimeElement} (`<time>`), with the `title`
     * attribute set to {@link Date.toLocaleString}. If
     * `timeElement` is set to `false`, then the text is
     * returned with no `<time>` element.
     */
    timeElement?: boolean;
};
export type TimeAgoOptions = Omit<TimeAgoProps, "date">;
/**
 * This context provider allows you to specify defaults for
 * all options.
 */
export declare const TimeAgoProvider: React.FC<TimeAgoOptions & PropsWithChildren>;
declare const TimeAgo: import("react").NamedExoticComponent<TimeAgoProps>;
export default TimeAgo;
