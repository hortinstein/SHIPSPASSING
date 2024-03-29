import { useCreate, useShow } from "@pankod/refine-core";
import { Show, Stack, Typography, TagField } from "@pankod/refine-mui";

import { IShip, IShipInfo } from "interfaces";

export const PostShow: React.FC = () => {
  // const { mutate } = useCreate();
  // mutate({
  //   resource: "CRUISEHER",
  //   values: {
  //     name: "boatname",
  //   },
  // });
  const { queryResult } = useShow<IShip>();
  // const shipRecord = CRUISEHERINFO.data;
  const { data, isLoading } = queryResult;
  const record = data?.data;
  console.log("called the record show for", record?.name);
  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          Title
        </Typography>
        <Typography variant="body2">{record?.name}</Typography>
        <Typography variant="body1" fontWeight="bold">
          Status
        </Typography>
        <Typography variant="body2">
          <TagField value={record?.population} />
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          Category
        </Typography>
        <Typography variant="body2">{record?.datestring}</Typography>
      </Stack>
    </Show>
  );
};
