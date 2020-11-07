import {Container} from "inversify";
import {TYPES} from "../../../core/types";
import "reflect-metadata";
import LayoutItemRepository from "../../../core/LayoutItem/Domain/LayoutItemRepository";
import LocalStorageLayoutItemRepository from "../../../core/LayoutItem/Infrastructure/LocalStorageLayoutItemRepository";
import LayoutItemCreator from "../../../core/LayoutItem/Application/LayoutItemCreator";

const container = new Container()
container.bind<LayoutItemCreator>(TYPES.LAYOUT_ITEM_CREATOR).to(LayoutItemCreator);
container.bind<LayoutItemRepository>(TYPES.LAYOUT_ITEM_REPOSITORY).to(LocalStorageLayoutItemRepository);

export {container}