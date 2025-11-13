import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const key = getQuery(event).key as string | undefined;
  if (!key) {
    throw createError({ statusCode: 400, statusMessage: "Missing key param" });
  }

  const s3 = new S3Client({
    endpoint: config.B2_ENDPOINT,
    region: config.B2_REGION,
    credentials: {
      accessKeyId: config.B2_KEY_ID,
      secretAccessKey: config.B2_APP_KEY,
    },
  });

  const cmd = new GetObjectCommand({
    Bucket: config.B2_BUCKET,
    Key: key,
  });

  const url = await getSignedUrl(s3, cmd, { expiresIn: 300 });

  return { url, expiresIn: 300 };
});
