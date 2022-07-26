<script>
    const data = [
        {
            news_url:
                "https://invezz.com/news/2022/07/20/tesla-q2-report-preview/",
            image_url:
                "https://cdn.snapi.dev/images/v1/m/u/62874914-m-1459338.jpg",
            title: "Tesla Inc is on a ‘knife's edge' heading into the Q2 report: Analyst",
            text: "Tesla Inc (NASDAQ: TSLA) is on a “knife's edge” ahead of its Q2 results scheduled for Wednesday after the bell, says Carter Worth – one of the top three technical analysts at Wall Street.",
            source_name: "Invezz",
            date: "Tue, 19 Jul 2022 21:30:39 -0400",
            topics: ["earnings"],
            sentiment: "Negative",
            type: "Article",
            tickers: ["TSLA"],
        },
        {
            news_url: "https://www.youtube.com/watch?v=AhBzJLW3AuI",
            image_url:
                "https://cdn.snapi.dev/images/v1/m/q/the-chartmaster-says-tesla-is-on-a-knifes-edge-ahead-of-earnings-1459331.jpg",
            title: "The Chartmaster says Tesla is on a 'knife's edge' ahead of earnings",
            text: "Carter Worth of Worth Charting looks at the scenarios for where Tesla could be heading from here. With CNBC's Courtney Reagan and the Fast Money traders, Guy Adami, Tim Seymour, Dan Nathan and Karen Finerman.",
            source_name: "CNBC Television",
            date: "Tue, 19 Jul 2022 21:09:29 -0400",
            topics: ["tanalysis"],
            sentiment: "Negative",
            type: "Video",
            tickers: ["TSLA"],
        },
        {
            news_url:
                "https://www.benzinga.com/news/22/07/28121335/tesla-sales-in-australia-have-momentum-and-could-double-by-end-of-year-chairwoman-says?SNAPI",
            image_url:
                "https://cdn.snapi.dev/images/v1/0/x/0x0-modelsplaid-3-1459210.jpg",
            title: "Tesla Sales In Australia Have Momentum, Could Double By End Of Year: Exec",
            text: "Electric vehicles from a market leader are seeing strong interest and momentum in Australia, according to new statements from the chair of the company. What Happened: Tesla Inc (NASDAQ: TSLA) chairwoman Robyn Denholm spoke at the Australian Clean Energy Summit this week and said the company.",
            source_name: "Benzinga",
            date: "Tue, 19 Jul 2022 18:02:01 -0400",
            topics: [],
            sentiment: "Positive",
            type: "Article",
            tickers: ["TSLA"],
        },
        {
            news_url: "https://www.youtube.com/watch?v=APHuE43nls8",
            image_url:
                "https://cdn.snapi.dev/images/v1/h/4/6262d75e9f65660019064127formatjpeg-1424985-1459162.jpg",
            title: "Tesla set to report second-quarter earnings on Wednesday",
            text: "Yahoo Finance auto reporter Pras Subramanian preview Tesla's second-quarter earnings report, which will be released on Wednesday, July 20.",
            source_name: "Yahoo Finance",
            date: "Tue, 19 Jul 2022 16:58:33 -0400",
            topics: ["earnings"],
            sentiment: "Neutral",
            type: "Video",
            tickers: ["TSLA"],
        },
        {
            news_url:
                "https://www.reuters.com/business/autos-transportation/jury-finds-tesla-just-1-liable-owes-105-mln-over-fatal-crash-2022-07-19/",
            image_url:
                "https://cdn.snapi.dev/images/v1/k/i/m02d20220719t2i1604298064w940fhfwllplsqrlynxmpei6i148-1459138.jpg",
            title: "Jury finds Tesla just 1% liable, but owes $10.5 million, over fatal crash",
            text: "A Florida jury found Tesla Inc just 1% liable in the death of an 18-year-old man whose Model S sedan slammed into a concrete wall, but ordered Elon Musk's electric car maker to pay $10.5 million to the driver's parents.",
            source_name: "Reuters",
            date: "Tue, 19 Jul 2022 16:44:00 -0400",
            topics: [],
            sentiment: "Negative",
            type: "Article",
            tickers: ["TSLA"],
        },
        {
            news_url:
                "https://seekingalpha.com/article/4524281-tesla-tsla-gold-standard-for-mission-driven-companies",
            image_url:
                "https://cdn.snapi.dev/images/v1/c/o/image-615265552-1458909.jpg",
            title: "Tesla: The Gold Standard For Mission-Driven Companies",
            text: "Tesla's mission is to accelerate the world's transition to sustainable energy. There are countless examples of decisions Tesla has taken to achieve this inspirational mission.",
            source_name: "Seeking Alpha",
            date: "Tue, 19 Jul 2022 15:22:29 -0400",
            topics: ["gold", "paylimitwall"],
            sentiment: "Positive",
            type: "Article",
            tickers: ["TSLA"],
        },
        {
            news_url:
                "https://www.benzinga.com/trading-ideas/movers/22/07/28122500/tesla-stock-is-rising-tuesday-whats-happening?SNAPI",
            image_url:
                "https://cdn.snapi.dev/images/v1/m/0/m02d20220708t2i1603582031w940fhfwllplsqrlynxmpei6709r-1444519-1458930.jpg",
            title: "Tesla Stock Is Rising Tuesday: What's Happening?",
            text: "Tesla Inc (NASDAQ: TSLA) shares are trading higher by 2.39% to $738.92 Tuesday afternoon amid overall market strength. The company also reports second-quarter earnings results Wednesday.",
            source_name: "Benzinga",
            date: "Tue, 19 Jul 2022 15:22:03 -0400",
            topics: [],
            sentiment: "Positive",
            type: "Article",
            tickers: ["TSLA"],
        },
        {
            news_url:
                "https://www.marketwatch.com/story/teslas-model-y-is-the-hottest-used-car-in-the-u-s-right-now-11658252949",
            image_url:
                "https://cdn.snapi.dev/images/v1/k/x/im-586483size1777777777777778width800-1458790.jpg",
            title: "Tesla's Model Y is the hottest used car in the U.S. right now",
            text: "The top 10 fastest-selling used cars are split between hybrid and electric vehicles, with the Tesla Inc. Model Y topping that list, iSeeCars.com said Tuesday.",
            source_name: "Market Watch",
            date: "Tue, 19 Jul 2022 13:49:00 -0400",
            topics: ["product", "paylimitwall"],
            sentiment: "Positive",
            type: "Article",
            tickers: ["TSLA"],
        },
        {
            news_url:
                "https://www.reuters.com/business/autos-transportation/tesla-braces-earnings-hit-ev-delivery-outlook-is-key-2022-07-19/",
            image_url:
                "https://cdn.snapi.dev/images/v1/v/j/m02d20220719t2i1604287122w940fhfwllplsqrlynxmpei6i0ya-1458817.jpg",
            title: "Tesla braces for earnings hit, but EV delivery outlook is key",
            text: "Tesla Inc's second-quarter results on Wednesday are expected to show the strains of China's COVID-19 lockdown and protracted startups of new factories. Investors want to know if the end of the year will be much better.",
            source_name: "Reuters",
            date: "Tue, 19 Jul 2022 13:45:00 -0400",
            topics: ["earnings"],
            sentiment: "Negative",
            type: "Article",
            tickers: ["TSLA"],
        },
        {
            news_url:
                "https://investorplace.com/2022/07/a-bigger-texas-gigafactory-is-better-for-tsla-stock/",
            image_url: "https://cdn.snapi.dev/images/v1/m/y/dw134-1458919.jpg",
            title: "A Bigger Texas Gigafactory Is Better for TSLA Stock",
            text: "Elon Musk wants to expand Tesla's Austin, Texas gigafactory with multiple buildings. Here's why this is great news for TSLA stock.",
            source_name: "InvestorPlace",
            date: "Tue, 19 Jul 2022 13:44:12 -0400",
            topics: [],
            sentiment: "Positive",
            type: "Article",
            tickers: ["TSLA"],
        },
    ];
</script>

{#each data as data, i}
    <div class="card card-side bg-base-100 shadow-xl">
        <figure>
            <img class="w-[200px] h-[100px]" src={data.image_url} alt="" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{data.title}</h2>
            <p>{data.text}</p>
        </div>
    </div>
{/each}
