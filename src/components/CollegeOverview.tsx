import { useTranslations } from "next-intl";
import Image from "next/image";

const CollegeOverview = () => {
  const t = useTranslations("Index");
  return (
    <section>
      <div className="section-width py-20  space-y-5 flex items-center justify-center flex-col text-center">
        <h2 className="text-3xl font-bold lg:line-clamp-2">
          {t("CollegeOverview.Title")}
        </h2>
        <p>{t("CollegeOverview.Description")}</p>
      </div>

      <div className="bg-[url('/images/bg/rectangle.png')] text-white/90">
        <div className="section-width py-20 flex items-center justify-between flex-col lg:flex-row gap-20">
          {/* left */}
          <div className="flex flex-col gap-10 justify-start items-start lg:w-1/3">
            <div className="flex flex-row items-center justify-center gap-5">
              <hr className="border-primary border-2 w-20 rounded" />
              <p>{t("OurSubjects.Title")}</p>
            </div>

            <h2 className="text-3xl font-bold">
              {t("OurSubjects.Description")}
            </h2>
          </div>

          {/* right */}
          <div className="flex items-center justify-between gap-10 w-full">
            {/* first */}
            <div className="border-primary border-2 p-5 flex items-center justify-between gap-5">
              <div className="space-y-1">
                <h3 className="font-semibold text-primary mb-2">
                  {t("OurSubjects.Science.Subname")}
                </h3>
                <p>{t("OurSubjects.Science.Mathematics")}</p>
                <p>{t("OurSubjects.Science.Physics")}</p>
                <p>{t("OurSubjects.Science.Chemistry")}</p>
                <p>{t("OurSubjects.Science.Statistics")}</p>
                <p>{t("OurSubjects.Science.Botany")}</p>
                <p>{t("OurSubjects.Science.Zoology")}</p>
                <p>{t("OurSubjects.Science.ComputerScience")}</p>
              </div>

              <Image
                width={50}
                height={50}
                src="/images/logo/science-logo.png"
                alt="Science Logo"
              />
            </div>

            {/* second */}
            <div className="border-primary border-2 p-5 flex items-center  justify-between gap-5">
              <div className="space-y-1">
                <h3 className="font-semibold text-primary mb-2">
                  {t("OurSubjects.Humanities.Subname")}
                </h3>
                <p>{t("OurSubjects.Humanities.History")}</p>
                <p>{t("OurSubjects.Humanities.Economics")}</p>
                <p>{t("OurSubjects.Humanities.Geography")}</p>
                <p>{t("OurSubjects.Humanities.PoliticalScience")}</p>
                <p>{t("OurSubjects.Humanities.Sociology")}</p>
                <p>{t("OurSubjects.Humanities.Psychology")}</p>
                <p>{t("OurSubjects.Humanities.Philosophy")}</p>
              </div>

              <Image
                width={50}
                height={50}
                src="/images/logo/humanities-logo.png"
                alt="Humanities Logo"
              />
            </div>

            {/* last */}
            <div className="border-primary border-2 p-5 flex items-center justify-between gap-5">
              <div className="space-y-1">
                <h3 className="font-semibold text-primary mb-2">
                  {t("OurSubjects.Commerce.Subname")}
                </h3>
                <p>{t("OurSubjects.Commerce.Accounting")}</p>
                <p>{t("OurSubjects.Commerce.BusinessStudies")}</p>
                <p>{t("OurSubjects.Commerce.Economics")}</p>
                <p>{t("OurSubjects.Commerce.Statistics")}</p>
                <p>{t("OurSubjects.Commerce.Marketing")}</p>
                <p>{t("OurSubjects.Commerce.Finance")}</p>
                <p>{t("OurSubjects.Commerce.Entrepreneurship")}</p>
              </div>

              <Image
                width={50}
                height={50}
                src="/images/logo/commerce-logo.png"
                alt="Commerce Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeOverview;
