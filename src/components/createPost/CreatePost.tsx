import {
  AccordionActions,
  AccordionDetails,
  Autocomplete,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Accordion, AccordionSummary } from "./AccordionCustom";
import { InputListing } from "./InputListing";
import axios from "axios";
import { useAuthStore } from "../../hooks/user";
import { IPostState } from "../../app/(manager)/manager-post/add-post/page";
import { useStoreAlert } from "../../hooks/alert";
import { useRouter } from "next/navigation";
import { onCreateListing } from "../../api/create/createPostService";
import { handleError } from "../../api/handleError";
export type TFieldPostValue = {
  address: string;
  leaseRate: string; // must be number
  depositFee: string; // must be number
  penaltyRate: string; // must be number
  description: string;
};
const CreatePost = ({ copyId }: { copyId: IPostState["copyId"] }) => {
  const { profile, token } = useAuthStore();
  const methods = useForm<TFieldPostValue>({ defaultValues: { address: profile?.address } });
  const { handleSubmit } = methods;
  const router = useRouter()
  const { callAlert, callErrorAlert } = useStoreAlert()
  const onSubmit: SubmitHandler<TFieldPostValue> = async (value) => {
    const { address, depositFee, description, leaseRate, penaltyRate } = value;
    let data = {
      copyId,
      ownerId: profile?.id,
      quantity: 1,
      expiryDate: "",
      listingStatus: "AVAILABLE",
      address,
      leaseRate: parseFloat(leaseRate),
      depositFee: parseFloat(depositFee),
      penaltyRate: parseFloat(penaltyRate),
      description,
    };
    try {
      const response = await onCreateListing(data, token);
      if (typeof response != "string") {
        callAlert(`Tạo sách #${response.data.id} thành công`)
        router.push(`/detail/${response.data.id}`) //TODO test in this
      }
      else {
        callErrorAlert(response);
      };
    } catch (error) {
      callErrorAlert(handleError(error))
    }

  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Bài đăng
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputListing
                  label="Mô tả trạng thái sách"
                  name="description"
                  required
                  isPost
                />
              </Grid>
              <Grid item xs={4}>
                <InputListing
                  label="Tiền cọc"
                  name="depositFee"
                  required
                  isPost
                  type="number"
                />
              </Grid>

              <Grid item xs={4}>
                <InputListing
                  label="Giá thuê theo ngày"
                  name="leaseRate"
                  required
                  isPost
                  type="number"
                />
              </Grid>
              <Grid item xs={4}>
                <InputListing
                  label="Phí phạt trả trễ theo ngày"
                  name="penaltyRate"
                  required
                  isPost
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <InputListing
                  label="Địa chỉ cho thuê"
                  name="address"
                  required
                  isPost
                />
              </Grid>
            </Grid>
          </AccordionDetails>
          <AccordionActions>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Tạo bài đăng
            </Button>
          </AccordionActions>
        </Accordion>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
