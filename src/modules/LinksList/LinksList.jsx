import { React, useEffect, useState } from "react";
import LinkComponent from "../../components/link-component/LinkComponent";
import { Button } from "../../components/button/Button";
import {
  LinksListContainer,
  LinksScrollContainer,
  LinkComponentHeader,
  LinkHeaderTitle,
  LinkHeaderDescription,
  LinksForm,
  SaveButtonContainer,
} from "./styles";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useForm, useFieldArray } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { linkListSchema } from "../../types/links.types";

const LOCAL_STORAGE_KEY = "linkListData";

const LinksList = ({ updateData }) => {
  const {
    handleSubmit,
    register,
    unregister,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(linkListSchema),
  });

  const [linkList, setLinkList] = useState([]);
  const [count, setCount] = useState(0);

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "links",
    }
  );

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const removeLink = (id) => {
    const newLinkList = linkList.filter(function (link) {
      return link.id !== id;
    });
    linkList.map((item, index) => {
      if (item.id == id) remove(index);
    });
    setLinkList(newLinkList);
    updateData(newLinkList);
  };

  const addLink = () => {
    setCount(count + 1);
    const newLink = { id: count.toString() };
    append(newLink);
    setLinkList([...linkList, newLink]);
    updateData(getValues().links);
  };

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;
    const newOrder = reorder(linkList, source.index, destination.index);
    swap(source.index, destination.index);
    setLinkList(newOrder);
    updateData(getValues().links);
  };

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (JSON.parse(storedData)) {
      const listWithIds = JSON.parse(storedData).map((item, index) => ({
        id: index.toString(),
        platform: item.platform,
        link: item.link,
      }));
      setLinkList(listWithIds);
      listWithIds.map((item) => {
        setValue(`links.${item.id}.link`, item.link);
        setValue(`links.${item.id}.platform`, item.platform);
      });
      setCount(listWithIds.length);
      updateData(getValues().links);
    }
  }, []);

  const onSubmit = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(getValues().links));
  };

  const updateLinkData = () => {
    updateData(getValues().links);
  };

  return (
    <div>
      <LinksListContainer>
        <LinkComponentHeader>
          <LinkHeaderTitle>Customize your links</LinkHeaderTitle>
          <LinkHeaderDescription>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </LinkHeaderDescription>
          <Button variant={"addLink"} onClick={addLink} type="button">
            + Add new Link
          </Button>
        </LinkComponentHeader>
        <LinksForm onSubmit={handleSubmit(onSubmit)}>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <LinksScrollContainer
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {linkList.map((item, index) => (
                    <Draggable
                      index={index}
                      draggableId={item.id}
                      key={item.id}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          style={{
                            width: "100%",
                            ...provided.draggableProps.style,
                            background: snapshot.isDragging
                              ? "pink"
                              : "transparent",
                          }}
                        >
                          <LinkComponent
                            key={item.id}
                            index={index}
                            item={item}
                            removeAction={removeLink}
                            register={register}
                            updateAction={updateLinkData}
                            {...provided.dragHandleProps}
                            error={
                              errors && errors.links && errors.links[index]
                            }
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </LinksScrollContainer>
              )}
            </Droppable>
          </DragDropContext>
          <SaveButtonContainer>
            <Button
              variant={"login"}
              type="submit"
              style={{ margin: "40px 20px 10px", width: "100px" }}
            >
              Save
            </Button>
          </SaveButtonContainer>
        </LinksForm>
      </LinksListContainer>
    </div>
  );
};

export default LinksList;
