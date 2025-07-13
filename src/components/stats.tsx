export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Dukkecord in numbers</h2>
                    <p>Our AI-powered Discord bot is transforming communication, productivity, and integration across millions of users and applications.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+1500</div>
                        <p>Stars on GitHub</p>
                    </div>
                    <div className="space-y-4 px-10">
                        <div className="text-5xl font-bold">1 Million</div>
                        <p>Active Users</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+50</div>
                        <p>Integrated Apps</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
