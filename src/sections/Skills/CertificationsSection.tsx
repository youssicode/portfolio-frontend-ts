import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { fetchSanityData, sortState } from "@/helpers/utils";
import { BiLinkExternal } from "react-icons/bi"
import { urlFor } from "@/helpers/client";
import Loading from "@/components/Loading"

// Sanity response type (full data structure)
type SanityCertificationType = {
    _id: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    certificate: string;
    certificateLink: string;
    credentialId: string;
    index: string;
    issued: string;
    from: string;
    icon: {
        asset: {
            _ref: string;
            _type: string;
        };
        _type: string;
    };
};

// Component-specific type (only the data we actually use)
export type CertificationType = {
    index: string;
    certificate: string;
    certificateLink: string;
    credentialId: string;
    issued: string;
    from: string;
    icon: {
        asset: {
            _ref: string;
        };
    };
};

const CertificationsSection = () => {
    const [certifications, setCertifications] = useState<CertificationType[]>([])

    useEffect(() => {
        const certificationMapper = ({
            certificate,
            certificateLink,
            credentialId,
            index,
            issued,
            from,
            icon: { asset }
        }: SanityCertificationType): CertificationType => ({
            certificate,
            certificateLink,
            credentialId,
            index,
            issued,
            from,
            icon: { asset }
        });

        fetchSanityData<SanityCertificationType, CertificationType>('*[_type == "certifications"]', certificationMapper, setCertifications);
    }, []);

    return (
        <div
            className="relative flex flex-col h-[31.5rem] shadow-simpleShadow bg-black/5 backdrop-blur-sm rounded-3xl min-w-full min-[450px]:min-w-[24rem] py-3 px-4 mt-8 min-[900px]:mt-0"
        >
            <h2 className="font-semibold text-2xl text-center mt-3 mb-5">
                Certifications
            </h2>
            {/* Take the available space & center the content (especially the "Loading..." text) */}
            <div className="flex-1 grid place-items-center">

                {certifications.length > 0 ?
                    (<div className="size-full flex flex-col justify-evenly">
                        {/* sorting the certifications using certification 'index' property before mapping */}
                        {(sortState(certifications) as CertificationType[])
                            .map(({ index, credentialId, icon, certificate, from, issued, certificateLink }) => (
                                <motion.div
                                    className="group relative bg-black/5 rounded-lg flex justify-start items-center p-2 mx-0 hover:before:content-[''] hover:bg-white min-[450px]:hover:scale-125 my-2 hover:my-[-12px] hover:shadow-simpleShadow hover:z-10 transition-all duration-300 ease-linear"
                                    key={credentialId}
                                >
                                    <img
                                        src={urlFor(icon)}
                                        className={
                                            (index === "0" ? "size-8 bg-gray " : "size-6 ") +
                                            "group-hover:size-12 mr-4"
                                        }
                                        alt="credential logo"
                                    />
                                    <div>
                                        <h4
                                            className={
                                                (index === "0" ? "text-xl " : "text-base ") +
                                                "font-medium"
                                            }
                                        >
                                            {certificate}
                                        </h4>
                                        <p className="text-sm text-left text-gray leading-6 hidden group-hover:block">
                                            <span className="font-extrabold">{from}</span> -{" "}
                                            {issued} -{" "}
                                            <a
                                                href={certificateLink}
                                                className="text-secondary  cursor-pointer"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                show
                                                <BiLinkExternal className="inline-block w-4 ml-1" />
                                            </a>
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                    </div>) : <Loading />}
            </div>
        </div>
    )
}

export default CertificationsSection