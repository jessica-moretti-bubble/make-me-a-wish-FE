import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuid } from "uuid";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const ext = getQuery(event).ext || "bin";

  const key = `gifts/${uuid()}.${ext}`;

  const s3 = new S3Client({
    endpoint: config.B2_ENDPOINT,
    region: config.B2_REGION,
    credentials: {
      accessKeyId: config.B2_KEY_ID,
      secretAccessKey: config.B2_APP_KEY,
    },
  });

  const uploadUrl = await getSignedUrl(
    s3,
    new PutObjectCommand({
      Bucket: config.B2_BUCKET,
      Key: key,
      ContentType: `application/octet-stream`,
    }),
    { expiresIn: 120 }
  );

  return { uploadUrl, key };
});
