/*



# Links

interface Link {
  type: "LINK";
  mutability: "IMMUTABLE";
  data: {
    href: string;
  }
}


# Type URL as text

# Make selection a link

  calculate selection bounding rectangle
  display formatting UI
  on click on "Create link":
    hide formatting UI
    display edit link UI
    on submit:
      create entity -> ContentState.createEntity
      apply entity to selection -> Modifier.applyEntity
      update editor state -> EditorState.push
      close create link UI

# Edit link on hover

  detect hover over entity
  calculate entity bounding rectangle
  display edit link UI
  on submit:
    replace entity data -> ContentState.replaceEntityDate
    update editor state -> EditorState.push
    close edit link UI

# Delete entity text
  on backspace:
    if at start of block
      if at start of document
        do nothing
      else
        merge blocks backward
    else
      get previous character
      if character has entity
        get entity range
        remove entity -> Modifier.applyEntity(content, selection, null)
        remove entity range -> Modifier.removeRange
  on delete:
    if at end of block
      if at end of document
        do nothing
      else
        merge blocks forward
    else
      get current character
      if character has entity
        get entity range
        remove entity -> Modifier.applyEntity(content, selection, null)
        remove entity range -> Modifier.removeRange

# Paste in content

  convert to plain text

# Skip over entities with cursor

  **NOTE** This is probably handled by "immutable" entities
  on selection state change
    track previous and current character
      (_,p) -> (p,p) => noop
      (_,p) -> (p,_) => noop
      (_,p) -> (p,e) => noop
      (_,e) -> (e,e) => skip to end of entity range
      (_,e) -> (e,p) => skip to end of entity range
      (_,e) -> (e,_) => skip to end of entity range

      (p,p) -> (p,p) => noop
      (p,p) -> (p,_) => noop
      (p,p) -> (p,e) => noop
      (p,e) -> (e,e) => skip to end of entity range
      (p,e) -> (e,p) => skip to end of entity range
      (p,e) -> (e,_) => skip to end of entity range

      (p,_) -> (p,p) => noop
      (p,_) -> (_,p) => noop
      (p,_) -> (e,p) => noop
      (e,_) -> (e,e) => skip to start of entity range
      (e,_) -> (p,e) => skip to start of entity range
      (e,_) -> (_,e) => skip to start of entity range

      (p,p) -> (p,p) => noop
      (p,p) -> (_,p) => noop
      (p,p) -> (e,p) => noop
      (e,p) -> (e,e) => skip to start of entity range
      (e,p) -> (p,e) => skip to start of entity range
      (e,p) -> (_,e) => skip to start of entity range


# @mention lookup by typing text

  detect "@" character
  listen for search term input
    mark startOffset
    mark endOffset

  stop listening on
    !selection.isCollapsed
    selection.startOffset < startOffset
    selection.endOffset > endOffset + 1
    





*/

export const command = () => undefined;
