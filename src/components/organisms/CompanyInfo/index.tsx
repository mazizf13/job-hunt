import React, { FC } from "react";

interface DetailCompanyPageProps {}

interface CompanyInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const CompanyInfo: FC<CompanyInfoProps> = ({ icon, label, value }) => {
  return (
    <div className="items-center inline-flex gap-3">
      <div>
        <div className="bg-white p-3 rounded-full text-primary">{icon}</div>
      </div>
      <div>
        <div className="text-gray-500">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
};

export default CompanyInfo;
