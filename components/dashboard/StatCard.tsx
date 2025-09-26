export default function StatCard(props: {
    title: string;
    value: string;
    subtitle: string;
    icon: React.ReactNode; // e.g., <Calendar className="w-6 h-6 text-amber-600" />
}) {
    const { title, value, subtitle, icon } = props;

    return (
        <div className="relative overflow-hidden rounded-2xl p-5 shadow-sm
                    bg-[#F2F0EC]"> {/* warm off-white like the mock */}
            {/* circular white from icon to corner */}
            <div
                className="pointer-events-none absolute top-0 right-0 h-24 w-28
                   rounded-bl-[999px] bg-[radial-gradient(circle_at_top_right,white_0%,#F2F0EC_100%)]"
                aria-hidden
            />

            <div className="relative z-10 flex items-start justify-between">
                <div>
                    <p className="text-sm font-semibold text-gray-900">{title}</p>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900">{value}</p>
                    <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
                </div>

                {/* icon bubble */}
                <div className="grid w-12 h-12 shrink-0 place-items-center rounded-xl">
                    {icon}
                </div>
            </div>
        </div>
    );
}