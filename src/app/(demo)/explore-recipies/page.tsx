import {ContentLayout} from "@/components/admin-panel/content-layout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import PlaceholderContent from "@/components/demo/placeholder-content";

export default function ExploreRecipiesPage() {
    return (
        <ContentLayout title="រូបម្ដមុុខម្ហូប">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/explore-recipies">រូបម្ដមុុខម្ហូប</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <PlaceholderContent />
        </ContentLayout>
    );
}