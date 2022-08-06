import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import ClientAdmFacadeInterface from "../../../client-adm/facade/client-adm.facade.interface";
import { PlaceOrderInputDto, PlaceOrderOutputDto } from "./place-order.dto";

export default class PlaceOrderUseCase implements UseCaseInterface {
  private _clientFacade: ClientAdmFacadeInterface;
  constructor() {}
  async execute(input: PlaceOrderInputDto): Promise<PlaceOrderOutputDto> {
    //Busca cliente
    const client = await this._clientFacade.find({ id: input.clientId });
    if (!client) {
      throw new Error("Client not found");
    }

    //Valida produto
    await this.validateProducts(input);
    //Recupera produto

    //criar objeto de cliente
    //criar objeto de order (cliente, produtos)

    //processar pagamento -> payment facade

    //caso pagamento seja aprovado, gerar invoice e atualizar status do order para approved
    //retornar order dto
    return {
      id: "1",
      invoiceId: "1",
      status: "approved",
      total: 100,
      products: [
        {
          productId: "1",
        },
      ],
    };
  }

  async validateProducts(input: PlaceOrderInputDto): Promise<void> {
    if (!input.products || input.products.length === 0) {
      throw new Error("No products selected");
    }
  }
}
