(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1933],{29551:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/date-picker-with-specific-disabled-dates",function(){return n(69828)}])},69828:function(e,t,n){"use strict";n.r(t);var a=n(24246),s=n(88941),u=n(27378),i=n(64515);t.default=(0,i.y)(function(){let[{month:e,year:t},n]=(0,u.useState)({month:1,year:2018}),[i,c]=(0,u.useState)(new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)")),r=(0,u.useCallback)((e,t)=>n({month:e,year:t}),[]),o=[new Date("Mon Feb 12 2018 00:00:00 GMT-0500 (EST)"),new Date("Sat Feb 10 2018 00:00:00 GMT-0500 (EST)"),new Date("Wed Feb 21 2018 00:00:00 GMT-0500 (EST)")];return(0,a.jsx)(s.M,{month:e,year:t,onChange(e){let{start:t}=e;return c(t)},onMonthChange:r,selected:i,disableDatesBefore:new Date("Sat Feb 03 2018 00:00:00 GMT-0500 (EST)"),disableDatesAfter:new Date("Sun Feb 25 2018 00:00:00 GMT-0500 (EST)"),disableSpecificDates:o})})}},function(e){e.O(0,[4515,3121,8941,9774,2888,179],function(){return e(e.s=29551)}),_N_E=e.O()}]);