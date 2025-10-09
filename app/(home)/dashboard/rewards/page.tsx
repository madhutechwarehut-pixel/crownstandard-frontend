// app/(dashboard)/rewards/page.tsx
import RewardHeader from "@/components/Rewards/RewardHeader";
import MembershipCard from "@/components/Rewards/MembershipCard";
import RewardsTabs from "@/components/Rewards/RewardsTabs";
import RewardCard from "@/components/Rewards/RewardCard";

export default function RewardsPage() {
    return (
        <div className="min-h-screen px-5 py-8 mx-auto space-y-8 max-w-7xl">
            {/* Header */}
            <RewardHeader />

            {/* Membership summary */}
            <MembershipCard />

            {/* Tabs */}
            <RewardsTabs />
        </div>
    );
}
